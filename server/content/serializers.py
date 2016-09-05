from rest_framework import serializers
from .models import Host, Overview


class HostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Host
        fields = ('id', 'name', 'email', 'phone', 'bio')


class OverviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Overview
        fields = ('id', 'week', 'monday', 'tuesday', 'wednesday',
                  'thursday', 'friday')
