from django.shortcuts import render

# Create your views here.


def index(request):
    # TODO(jongseong) replace hardcoded latest_worksheet_list with get_object_or_404()
    latest_worksheet_list = [
        {'title': '배정고 3학년 2학기 기말고사 대비', 'user': 'sphinx',
            'publisher': '금성출판사(2018)', 'num_questions': 12, 'num_views': 7, 'num_likes': 4, 'num_prints': 2},
        {'title': '판교고 3학년 2학기 기말고사 대비', 'user': 'sphinx',
            'publisher': '금성출판사(2018)', 'num_questions': 16, 'num_views': 7, 'num_likes': 2, 'num_prints': 1}]
    return render(request, 'worksheet/index.html', {'latest_worksheet_list': latest_worksheet_list})
