#!/bin/bash  
PART1=AQ.Ab8RN6JrEF4GCx1Lj  
PART2=Dg9rWU3ofwXvyvWwXNjZOS7Pac9JdB91Q  
echo GEMINI_API_KEY= > .env  
echo DRIVE_FOLDER_ID=13kL0O-A1K7u3qP1kQ2qE4A4Zc8tXf8_ >> .env  
echo PORT=4000 >> .env  
echo NODE_ENV=production >> .env  
echo FRONTEND_URL=https://bombeodeptrai.github.io >> .env  
docker-compose up -d --build 
