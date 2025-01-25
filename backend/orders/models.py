
from django.db import models
from django.utils.translation import gettext_lazy as _
from users.models import CustomUser
from products.models import Product

class Order(models.Model):
    class StatusChoices(models.TextChoices):
        PENDING = 'PENDING', _('En attente')
        PROCESSING = 'PROCESSING', _('En cours')
        SHIPPED = 'SHIPPED', _('Expédié')
        DELIVERED = 'DELIVERED', _('Livré')
        CANCELLED = 'CANCELLED', _('Annulé')

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    total_price = models.DecimalField(_('Prix total'), max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length=20, 
        choices=StatusChoices.choices, 
        default=StatusChoices.PENDING
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Commande {self.id} - {self.user.email}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(_('Quantité'))
    price = models.DecimalField(_('Prix'), max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"
