from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class QuestionType(models.Model):
    title = models.CharField(max_length=10)
    type_text = models.CharField(max_length=200)


class Worksheet(models.Model):
    title = models.CharField(max_length=200)
    book_concern = models.CharField(max_length=10)
    views = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    pub_date = models.DateTimeField(('date published'))


class Question(models.Model):
    worksheet = models.ForeignKey(Worksheet, on_delete=models.CASCADE)
    question_text = models.TextField()
    question_type = models.ForeignKey(QuestionType, on_delete=models.CASCADE)
    given_sentence = models.IntegerField()
    choice_1 = models.IntegerField()
    choice_2 = models.IntegerField()
    choice_3 = models.IntegerField()
    choice_4 = models.IntegerField()
    choice_5 = models.IntegerField()
    save_date = models.DateTimeField(('date saved'))
