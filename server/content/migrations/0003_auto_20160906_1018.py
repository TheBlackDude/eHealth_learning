# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0002_overview'),
    ]

    operations = [
        migrations.AlterField(
            model_name='host',
            name='phone',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
