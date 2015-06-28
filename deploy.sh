docker build -t movies-frontend .
docker tag -f movies-frontend tutum.co/dubbelnisse/movies-frontend
docker push tutum.co/dubbelnisse/movies-frontend