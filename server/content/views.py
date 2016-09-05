from django.shortcuts import render
from rest_framework import generics
from .models import Host, Overview
from .serializers import HostSerializer, OverviewSerializer


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
