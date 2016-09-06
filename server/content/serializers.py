from rest_framework import serializers
from .models import Host, Overview, Project


class HostSerializer(serializers.ModelSerializer):
    """ A Serializer for the Hosts Model."""

    class Meta:
        model = Host
        fields = ('id', 'name', 'email', 'phone', 'bio')


class OverviewSerializer(serializers.ModelSerializer):
    """ A Serializer for the Overview Model."""

    class Meta:
        model = Overview
        fields = ('id', 'week', 'monday', 'tuesday', 'wednesday',
                  'thursday', 'friday')


class ProjectSerializer(serializers.ModelSerializer):
    """ A Serializer for the Project Model."""

    class Meta:
        model = Project
        fields = ('id', 'authors', 'name', 'description', 'repo')
