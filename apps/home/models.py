from django.db import models

# Create your models here.


class ContactMessage(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(null=False, blank=False)
    phone = models.CharField(max_length=50, null=False, blank=False)
    message = models.TextField(null=False, blank=False)
    sent_date = models.DateField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.name
