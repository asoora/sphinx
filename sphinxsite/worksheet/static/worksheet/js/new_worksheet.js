var questionTitles = [
    '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳을 고르시오.'
];

function toQuestionTitle(id) {
    return questionTitles[id - 1];
}

function splitSentence(text) {
    return text.match(/[^\.!\?]+[\.!\?]+/g);
}

function addType1Step2() {
    document.getElementById('wiz-header').innerHTML = '보기 선택';
    document.getElementById('wiz-body').setAttribute('class', 'd-none');
}

function addType1Step1(text) {
    document.getElementById('wiz-header').innerHTML = '어떤 문장을 "주어진 문장"으로 사용하시겠어요?';
    var sentences = splitSentence(text);
    var type1Step1Template = document.getElementById('type1Step1').innerHTML;
    var type1Step1Html = '';
    for (i = 0; i < sentences.length; i++) {
        type1Step1 = type1Step1Template.replace(/\{\$sentenceId\$\}/gi, i + 1);
        type1Step1 = type1Step1.replace(/\{\$sentence\$\}/gi, sentences[i]);
        type1Step1Html += type1Step1;
    }
    document.getElementById('type1Step1').innerHTML = type1Step1Html;
    document.getElementById('wiz-body').removeAttribute('class');
    document.getElementById('type1Step1Form').addEventListener('submit', function (e) {
        e.preventDefault();
        addType1Step2();
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