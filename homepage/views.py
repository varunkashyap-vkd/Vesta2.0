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
from homepage import PyOpenGraph as InfoExtractor
import validators
import urllib.request

sample = 'patient'

def root(request):
	subcategory = 'current'

	if sample == 'doctor':
		subcategory = 'reports'

	elif sample == 'pharmacy':
		subcategory = 'confirmedOrders'

	elif sample == 'lab':
		subcategory = 'reports'

	return redirect(reverse('homepage', kwargs = {'category' : 'profile', 'subcategory' : subcategory}))


def homepage(request, category, subcategory):
	dictionary = {
		'category' : category,
		'subcategory' : subcategory,
		'type' : 'normal',
		'userType' : sample,
	}
	return HttpResponse(render(request, 'homepage/homepage.html', dictionary))


def homepage2(request, category):
	dictionary = {
		'category' : category,
		'type' : 'normal',
		'userType' : sample,
	}
	return HttpResponse(render(request, 'homepage/homepage.html', dictionary))


def search(request):
	return HttpResponse(render(request, 'homepage/searchResults.html'))

def timeSlots(request):
	return HttpResponse(render(request, 'homepage/time-slots.html'))


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




			