
from django.db import models
from django.utils.translation import gettext_lazy as _
from users.models import CustomUser

class Vendor(models.Model):
    class StatusChoices(models.TextChoices):
        PENDING = 'PENDING', _('En attente')
        APPROVED = 'APPROVED', _('Approuvé')
        SUSPENDED = 'SUSPENDED', _('Suspendu')

    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    business_name = models.CharField(_('Nom commercial'), max_length=200)
    description = models.TextField(_('Description'), blank=True)
    
    status = models.CharField(
        max_length=20, 
        choices=StatusChoices.choices, 
        default=StatusChoices.PENDING
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.business_name
