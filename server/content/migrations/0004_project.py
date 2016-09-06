# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0003_auto_20160906_1018'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('authors', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=150)),
                ('repo', models.CharField(blank=True, max_length=100)),
            ],
            options={
                'verbose_name_plural': 'Projects',
            },
        ),
    ]
