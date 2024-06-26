from django.utils.deprecation import MiddlewareMixin
from django.contrib.auth import get_user


class CustomAuthenticationMiddleware(MiddlewareMixin):
    def process_request(self, request):
        print("Request user:")
        print(request.user, request.user.is_anonymous)
