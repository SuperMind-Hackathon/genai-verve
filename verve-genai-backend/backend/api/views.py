from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
class Homeview(APIView):

    def get(self, request):
        return Response({'data': 'hello world'})