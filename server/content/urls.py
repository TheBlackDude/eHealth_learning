from django.conf.urls import url
from .views import HostListCreate, HostDetail, OverviewListCreate, OverviewDetail, ProjectListCreate, ProjectDetail

urlpatterns = [
    url(r'^hosts/$', HostListCreate.as_view()),
    url(r'^hosts/(?P<pk>[0-9]+)/$', HostDetail.as_view()),
    url(r'^contents/$', OverviewListCreate.as_view()),
    url(r'^contents/(?P<pk>[0-9]+)/$', OverviewDetail.as_view()),
    url(r'^projects/$', ProjectListCreate.as_view()),
    url(r'^projects/(?P<pk>[0-9]+)/$', ProjectDetail.as_view()),
]
