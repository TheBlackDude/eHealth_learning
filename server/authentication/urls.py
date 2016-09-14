from rest_framework.routers import DefaultRouter
from .views import AccountViewSet

router = DefaultRouter()
router.register(prefix='accounts', viewset=AccountViewSet)
