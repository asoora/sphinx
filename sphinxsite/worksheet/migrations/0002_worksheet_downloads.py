# Generated by Django 2.1 on 2018-08-22 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('worksheet', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='worksheet',
            name='downloads',
            field=models.IntegerField(default=0),
        ),
    ]
