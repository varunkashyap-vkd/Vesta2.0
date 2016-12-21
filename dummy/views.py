from django.shortcuts import render
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.shortcuts import render, get_object_or_404, redirect, redirect
from django.http import HttpResponse
from django.views.decorators.http import require_GET, require_POST,require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.core.urlresolvers import reverse
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.template import loader
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from django.http import JsonResponse
from django.template import Context, Template

def homepage(request):
	return HttpResponse(render(request, 'common/homepage.html'))

def social(request):
	return HttpResponse(render(request, 'common/vestaSocial.html', {'type' : 'news'}))

def socialDoctor(request):
	return HttpResponse(render(request, 'common/vestaSocial.html', {'type' : 'differential'}))

def socialPatient(request):
	return HttpResponse(render(request, 'common/vestaSocial.html', {'type' : 'insight'}))

def comment(request):
	return HttpResponse(render(request, 'common/comment.html'))

def profile(request):
	return HttpResponse(render(request, 'common/profile.html'))