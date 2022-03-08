from django.db import models
from apps.users.models import User
import os

# Create your models here.


class ContactMessage(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(null=False, blank=False)
    phone = models.CharField(max_length=50, null=False, blank=False)
    message = models.TextField(null=False, blank=False)
    sent_date = models.DateField(auto_now_add=True, editable=False)

    class Meta:
        verbose_name = "Message"
        verbose_name_plural = "Messages"


    def __str__(self):
        return self.name

options = [
    ('CVM', 'curriculum'), # curriculum
    ('ANY', 'any file'), # any file
    ('IMG', 'image') # image
]

class AnyFile(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    file = models.FileField(upload_to='public/file/%Y/%m/%d', blank=False, null=False)
    name = models.CharField(max_length=100, null=False, blank=False)
    description = models.CharField(max_length=200)
    upload_at = models.DateTimeField(auto_now_add=True, editable=False)
    category = models.CharField(max_length=3, choices=options, blank=False, null=False)

    class Meta:
        verbose_name = "File"
        verbose_name_plural = "Files"

    def delete(self,*args,**kwargs):
        if os.path.isfile(self.file.path):
            os.remove(self.file.path)
        super(AnyFile, self).delete(*args,**kwargs)
