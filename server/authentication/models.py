from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.db import models

# Define our own Manager
class AccountManager(BaseUserManager):
    # function to create normal users
    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError('Users must have a valid email address.')
        
        if not kwargs.get('name'):
            raise ValueError('Users must have a valid name.')

        account = self.model(
            email=self.normalize_email(email),
            name=kwargs.get('name')
        )

        account.set_password(password)
        account.save()

        return account

    # function to create admins
    def create_superuser(self, email, password, **kwargs):
        account = self.create_user(email, password, **Kwargs)

        account.is_admin = True
        account.save()

        return account


# Create Users Accounts
class Account(AbstractBaseUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=50)

    is_admin = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    class Meta:
        verbose_name_plural = 'Accounts'

    def __str__(self):
        return self.name
