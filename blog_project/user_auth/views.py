from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import generics
from .serializers import *
from .models import Blog, Comment

class RegisterView(APIView):
    def post(self, req):
        ser = UserRegisterSerializer(data=req.data)
        if ser.is_valid():
            ser.save()
            return Response({'msg':'registered'})
        return Response(ser.errors, status=400)

class LoginView(APIView):
    def post(self, req):
        ser = UserLoginSerializer(data=req.data)
        if ser.is_valid():
            user = ser.validated_data
            tok = RefreshToken.for_user(user)
            return Response({'refresh':str(tok),'access':str(tok.access_token)})
        return Response(ser.errors, status=400)

class DashboardView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, req):
        ser = UserProfileSerializer(req.user)
        return Response(ser.data)

class BlogListCreate(generics.ListCreateAPIView):
    queryset = Blog.objects.all().order_by('-created_at')
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticated]
    def perform_create(self, ser): ser.save(user=self.request.user)

class BlogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticated]

class CommentCreate(generics.CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]
    def perform_create(self, ser): ser.save(user=self.request.user)
