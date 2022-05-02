from django.contrib import admin
from .models import ContactMessage, AnyFile

# Register your models here.
@admin.action(description='Delete object and file')
def delete_file(modeladmin, request, queryset):
    for file in queryset:
        file.delete()


class AnyFileAdmin(admin.ModelAdmin):
    
    list_display = ('owner', 'name', 'description', 'upload_at', 'file')
    
    actions = [delete_file]

    def get_actions(self, request):
        actions = super().get_actions(request)
        if 'delete_selected' in actions:
            del actions['delete_selected']
        return actions


admin.site.register(AnyFile, AnyFileAdmin)
admin.site.register(ContactMessage)
