from django.shortcuts import render
from django.shortcuts import redirect
from .models import Post
from django.views.decorators.csrf import csrf_exempt

def index(request):
    
  return render(request, './myportfolio/index.html')

@csrf_exempt
def guestbook(request):

    postlist = Post.objects.all()
    
    if request.method == 'POST':
        new_article=Post.objects.create(
                name=request.POST['postname'],
                pwd = request.POST['postpwd'],
                contents=request.POST['contents'],)
        return redirect('/guestbook')
    else:
        qy = request.GET.get('searchContents', "")
        filter_obj = postlist.filter(name=qy)    
        if qy == "":
             return render(request, './myportfolio/guestbook.html', {'postlist':postlist[::-1]})
        else:
            return render(request, './myportfolio/guestbook.html', {'postlist':filter_obj[::-1]})
    

@csrf_exempt
def deletePost(request):
    postlist = Post.objects.all()

    if request.method == 'POST':
        target = request.POST['index']
        for list in postlist[::-1]:

            if list.pk == int(target):
                list.delete()
                break
        return render(request, './myportfolio/guestbook.html', {'postlist':postlist[::-1]})
    
    


@csrf_exempt
def updatePost(request):
    postlist = Post.objects.all()

    if request.method == 'POST':
        target = request.POST['index']
        for list in postlist[::-1]:
            if list.pk == int(target):
                list.contents = request.POST['contents']
                list.save()
                break
        return render(request, './myportfolio/guestbook.html', {'postlist':postlist[::-1]})
    
    

            

