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
from dummy import PyOpenGraph as InfoExtractor
import validators
import urllib.request


def root(request):
	return redirect(reverse('homepage', kwargs = {'category' : 'profile', 'subcategory' : 'current'}))


def homepage(request, category, subcategory):
	return HttpResponse(render(request, 'homepage/homepage.html', {'category' : category, 'subcategory' : subcategory}))


def homepage2(request):
	return HttpResponse(render(request, 'homepage/homepage.html', {'category' : 'futureAppointments'}))


@csrf_exempt
def thumbnail(request):
	text = request.POST.get('text')
	text = text.split('http')
	result = ''

	if len(text) == 1:
		return JsonResponse({'match' : 'false'})

	else:
		text = text[1]
		text = text.split(" ")
		url = "http" + str(text[0])

		if validators.url(url):
			try:
				data = InfoExtractor.PyOpenGraph(url)
				return JsonResponse({'data' : data.metadata, 'match' : 'true'})

			except urllib.error.HTTPError:
				return JsonResponse({'match' : 'false'})

		else:
			return JsonResponse({'match' : 'false'})




			