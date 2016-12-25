"""Vesta URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from dummy import views as dummyViews

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', dummyViews.root, name = 'home'),
    url(r'^social$', dummyViews.social, name = "newsFeed"),
    url(r'^social/doctorDiscussion$', dummyViews.socialDoctor, name = "socialDoctor"),
    url(r'^social/patientDiscussion$', dummyViews.socialPatient, name = "socialPatient"),
    url(r'^comment$', dummyViews.comment, name = "comment"),
    url(r'^profile$', dummyViews.profile, name = "profile"),
    url(r'^thumbnail$', dummyViews.thumbnail, name = "thumbnail"),

    url(r'^homepage/(?P<category>[\w\-]+)/(?P<subcategory>[\w\-]+)$', dummyViews.homepage, name = "homepage"),
    url(r'^homepage/futureAppointments/$', dummyViews.homepage2, name = "homepage2"),
]
