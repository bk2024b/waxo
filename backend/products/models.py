
from django.db import models
from django.utils.translation import gettext_lazy as _
from vendors.models import Vendor

class Category(models.Model):
    name = models.CharField(_('Nom'), max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(_('Description'), blank=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    class StatusChoices(models.TextChoices):
        DRAFT = 'DRAFT', _('Brouillon')
        PUBLISHED = 'PUBLISHED', _('Publié')
        OUT_OF_STOCK = 'OUT_OF_STOCK', _('Rupture de stock')

    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(_('Nom du produit'), max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField(_('Description'))
    price = models.DecimalField(_('Prix'), max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    
    stock_quantity = models.PositiveIntegerField(_('Quantité en stock'), default=0)
    status = models.CharField(
        max_length=20, 
        choices=StatusChoices.choices, 
        default=StatusChoices.DRAFT
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    @property
    def is_available(self):
        return self.stock_quantity > 0 and self.status == self.StatusChoices.PUBLISHED
