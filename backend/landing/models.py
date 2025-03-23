from django.db import models

# Create your models here.

class Landing_Page(models.Model):
    logo = models.ImageField(upload_to='logos/', null=True, blank=True)
    nav_items = models.JSONField(default=list)  # Store nav items as JSON
    login_btn_text = models.CharField(max_length=50, default="Login")  # ✅ Corrected field name
    login_btn_color = models.CharField(max_length=10, default="#FF0000")

    def __str__(self):
        return "Landing Page Settings"



class Hero_Section(models.Model):
    heading     = models.CharField(max_length=255, default="Your Deserve the best")
    subtitle    = models.TextField(default="YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.")
    prim_btn_clr= models.CharField(max_length=20, default='#FF0000' )
    sec_btn_clr = models.CharField(max_length=20, default='#FFFFFF')
    avail_icon  = models.JSONField(default='list')

    def __str__(self):
        return self.heading