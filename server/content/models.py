from django.db import models


class Host(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    bio = models.TextField(default='')

    class Meta:
        verbose_name = 'Host'
        verbose_name_plural = 'Hosts'

    def __str__(self):
        return self.name


