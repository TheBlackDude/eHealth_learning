# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Overview',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
                ('week', models.CharField(max_length=20)),
                ('monday', models.TextField(default='')),
                ('tuesday', models.TextField(default='')),
                ('wednesday', models.TextField(default='')),
                ('thursday', models.TextField(default='')),
                ('friday', models.TextField(default='')),
            ],
        ),
    ]
