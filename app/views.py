from django.shortcuts import render
from django.http import HttpResponse
from .models import ToDoList

# Create your views here.

def index(request):
    items = ToDoList.objects.all()
    context ={
        'items':items
    }
    return render(request,'app/index.html',context)

def add_item(request):
    if request.method == "GET":
        item = request.GET.get('item')
        user_item = ToDoList(item=item)
        user_item.save()
    return HttpResponse("Item Saved")


def delete_item(request):
    if request.method == "GET":
        item = request.GET.get('item_id')
        item_to_be_deleted = ToDoList.objects.get(pk=item)
        item_to_be_deleted.delete()
    return HttpResponse("Item deleted")
