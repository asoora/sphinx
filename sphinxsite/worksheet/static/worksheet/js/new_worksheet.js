var questionTitles = [
    '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳을 고르시오.'
];

function toQuestionTitle(id) {
    return questionTitles[id - 1];
}

function splitSentence(text) {
    return text.match(/[^\.!\?]+[\.!\?]+/g);
}

function keepCountType1Step2(sentenceId) {
    var sentenceCheckbox = document.getElementsByName('sentenceCheckbox');
    var numChecked = 0;
    sentenceCheckbox.forEach(function(element) {
        if (element.checked) {
            numChecked += 1;
        }
    });
    if (numChecked == 5) {
        sentenceCheckbox.forEach(function(element) {
            if (!element.checked) {
                element.disabled = true;
            }
        });
    } else {
        for (i = 0; i < sentenceCheckbox.length; i++) {
            if (i != sentenceId && !sentenceCheckbox[i].checked) {
                sentenceCheckbox[i].disabled = false;
            }
        }
    }
}

function addType1Step2(sentences, sentenceId) {
    document.getElementById('wiz-header').innerHTML = '앞에 보기(숫자)를 넣을 문장을 선택하세요.';
    document.getElementById('type1Step1Wrap').setAttribute('class', 'd-none');

    var type1Step2Template = document.getElementById('type1Step2Body').innerHTML;
    var type1Step2Html = '';
    for (i = 0; i < sentences.length; i++) {
        type1Step2 = type1Step2Template.replace(/\{\$sentenceId\$\}/gi, i + 1);
        type1Step2 = type1Step2.replace(/\{\$sentence\$\}/gi, sentences[i]);
        type1Step2Html += type1Step2;
    }
    document.getElementById('type1Step2Body').innerHTML = type1Step2Html;
    document.getElementById('type1Step2Wrap').removeAttribute('class');

    var sentenceCheckbox = document.getElementsByName('sentenceCheckbox');
    for (i = 0; i < sentenceCheckbox.length; i++) {
        sentenceCheckbox[i].addEventListener('click', function () {
            keepCountType1Step2(sentenceId);
        });
        if (i == sentenceId) {
            sentenceCheckbox[i].disabled = true;
        }
    }

    document.getElementById('type1Step2Form').addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('wiz-header').innerHTML = '아래의 "문제 추가히기" 버튼을 클릭하세요.';
        document.getElementById('type1Step2Wrap').setAttribute('class', 'd-none');

        var questionBody = [];
        var sentence = ''
        var num = 1;
        for (i = 0; i < sentenceCheckbox.length; i++) {
            if (i == sentenceId) {
                continue;
            }

            if (sentenceCheckbox[i].checked) {
                sentence = sentences[i];
                sentence = '( ' + num++ + ' ) ' + sentence;
            } else {
                sentence = sentences[i];
            }
            questionBody.push(sentence);
        }

        var type1PreviewWrap = document.getElementById('type1PreviewWrap');
        type1PreviewWrap.removeAttribute('class');
        type1PreviewWrap.getElementsByClassName('card-text')[0].innerHTML = questionTitles[0];
        type1PreviewWrap.getElementsByClassName('card-text')[2].innerHTML = sentences[sentenceId];
        type1PreviewWrap.getElementsByClassName('card-text')[4].innerHTML = questionBody.join(' ');
    });
}

function addType1Step1(text) {
    document.getElementById('wiz-header').innerHTML = '어떤 문장을 "주어진 문장"으로 사용하시겠어요?';
    var sentences = splitSentence(text);
    var type1Step1Template = document.getElementById('type1Step1Body').innerHTML;
    var type1Step1Html = '';
    for (i = 0; i < sentences.length; i++) {
        type1Step1 = type1Step1Template.replace(/\{\$sentenceId\$\}/gi, i);
        type1Step1 = type1Step1.replace(/\{\$sentence\$\}/gi, sentences[i]);
        type1Step1Html += type1Step1;
    }
    document.getElementById('type1Step1Body').innerHTML = type1Step1Html;
    document.getElementById('type1Step1Wrap').removeAttribute('class');
    document.getElementById('type1Step1Form').addEventListener('submit', function (e) {
        e.preventDefault();
        var sentenceId = document.querySelector('input[name="sentenceRadio"]:checked').value;
        addType1Step2(sentences, sentenceId);
    });
}

document.getElementById('questionForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // get form values
    var questionForm = document.forms['questionForm'];
    var text = questionForm['textarea1'].value;
    var questionType = questionForm['questionType'].value;
    console.log(questionType);
    var questionTitle = toQuestionTitle(questionType);
    // call the first step
    if (questionType == 1) {
        addType1Step1(text);
    }
});