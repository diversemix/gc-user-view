
IMAGE_NAME = static-example:test
CONTAINER = test_example

run:
	make start

build:
	yarn
	yarn lint
	yarn test
	yarn build

build-container: build
	docker build . -t ${IMAGE_NAME}

start: build-container
	docker run -td -p 8080:8080 --name ${CONTAINER} ${IMAGE_NAME}
	yarn test:browser

stop:
	- docker stop ${CONTAINER}
	- docker rm ${CONTAINER}

clean: stop
	docker rmi ${IMAGE_NAME}
