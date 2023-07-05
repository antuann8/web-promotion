PROJECTNAME = superapp-web-fitness-admin

docker-build:
	docker build -t $(PROJECTNAME) -f Dockerfile .

docker-run:
	docker run --name $(PROJECTNAME) -d --restart=always -p 9060:80 $(PROJECTNAME)