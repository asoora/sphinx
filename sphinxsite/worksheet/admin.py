from django.contrib import admin

from .models import Worksheet
from .models import Question
from .models import QuestionType

# Register your models here.
admin.site.register(Worksheet)
admin.site.register(Question)
admin.site.register(QuestionType)
