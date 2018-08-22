from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class QuestionType(models.Model):
    title = models.CharField(max_length=10)
    type_text = models.CharField(max_length=200)
    
    def __str__(self):
        return self.title


class Worksheet(models.Model):
    title = models.CharField(max_length=200)
    book_concern = models.CharField(max_length=20)
    num_questions = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    downloads = models.IntegerField(default=0)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    pub_date = models.DateTimeField(('date published'))

    def __str__(self):
        return self.title


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

    def __str__(self):
        return f'{self.worksheet} - {self.question_type}'
