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
import validators
import urllib.request


def socialRoot(request):
	return redirect(reverse('vestaSocial', kwargs = {'category' : 'mySpace'}))


def vestaSocial(request, category):
	dictionary = {
		'type' : 'social',
		'category' : category,
		'userType' : 'patient',
	}

	if category == 'profile':
		return HttpResponse(render(request, 'social/profile.html', dictionary))

	if category == 'comment':
		return HttpResponse(render(request, 'social/comment.html', dictionary))

	return HttpResponse(render(request, 'social/vestaSocial.html', dictionary))
