# Generated by Django 4.2.18 on 2025-03-23 01:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='landing_page',
            old_name='login_btn_Text',
            new_name='login_btn_text',
        ),
        migrations.AlterField(
            model_name='landing_page',
            name='login_btn_color',
            field=models.CharField(default='#FF0000', max_length=10),
        ),
    ]
