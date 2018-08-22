from django.shortcuts import render

from .models import Worksheet

# Create your views here.


def index(request):
    latest_worksheet_list = Worksheet.objects.order_by('-pub_date')[:6]
    context = {'latest_worksheet_list': latest_worksheet_list}
    return render(request, 'worksheet/index.html', context)


def new_worksheet(request):
    return render(request, 'worksheet/new_worksheet.html')
