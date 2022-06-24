from django.db import models
from django.utils.timezone import now
# Create your models here.


class Post(models.Model):
    name = models.CharField(max_length=50)
    pwd = models.CharField(max_length=50, default="1")
    contents = models.TextField()
    created_date = models.DateTimeField(default=now, editable=False)
    def __str__(self):
        return self.name


