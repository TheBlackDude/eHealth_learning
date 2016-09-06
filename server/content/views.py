from django.shortcuts import render
from rest_framework import generics
from .models import Host, Overview, Project
from .serializers import HostSerializer, OverviewSerializer, ProjectSerializer


def index(request):
    return render(request, 'index.html')


class HostListCreate(generics.ListCreateAPIView):
    """An API endpoint for listing and creating hosts"""
    queryset = Host.objects.all()
    serializer_class = HostSerializer


class HostDetail(generics.RetrieveUpdateDestroyAPIView):
    """An API endpoint for updating, deleting hosts."""
    queryset = Host.objects.all()
    serializer_class = HostSerializer


class OverviewListCreate(generics.ListCreateAPIView):
    """An API endpoint for retrieving and creating contents."""
    queryset = Overview.objects.all()
    serializer_class = OverviewSerializer


class OverviewDetail(generics.RetrieveUpdateDestroyAPIView):
    """An API endpoint for retrieving, deleting contents."""
    queryset = Overview.objects.all()
    serializer_class = OverviewSerializer


class ProjectListCreate(generics.ListCreateAPIView):
    """An API endpoint for creating and listing Projects."""
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    """An API endpoint for retrieving, updating, deleting Projects."""
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
