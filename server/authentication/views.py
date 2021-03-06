import json
from django.contrib.auth import authenticate, login, logout
from rest_framework import permissions, viewsets, status, views
from rest_framework.response import Response
from .models import Account
from .permissions import IsAccountOwner
from .serializers import AccountSerializer


class AccountViewSet(viewsets.ModelViewSet):
    """ API endpoint for User Account."""
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner())

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            Account.objects.create_user(**serializer.validated_data)
            return Response(
              serializer.validated_data, status=status.HTTP_201_CREATED
            )
        return Response({
           'status': 'Bad request',
           'message': 'Account could not be created with received data'
           }, status=status.HTTP_400_BAD_REQUEST)


class LoginView(views.APIView):
    """ API endpoint for User Login."""
    def post(self, request, format=None):
        data = json.loads(request.body.decode('utf-8'))

        email = data.get('email', None)
        password = data.get('password', None)

        account = authenticate(email=email, password=password)

        if account is not None:
            if account.is_active:
                login(request, account)
                serialized = AccountSerializer(account)
                return Response(serialized.data)
            else:
                return Response({
                    'status': 'Unauthorized',
                    'message': 'This account has been disabled.'
                    }, status=status.HTTP_401_UNAUTHORIZED
                )
        else:
            return Response({
                'status': 'Unauthorized',
                'message': 'Email/Password invalid.'
                }, status=status.HTTP_401_UNAUTHORIZED
            )


class LogoutView(views.APIView):
    """ API endpoint for User Logout."""
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        logout(request)
        return Response({}, status=status.HTTP_204_NO_CONTENT)
