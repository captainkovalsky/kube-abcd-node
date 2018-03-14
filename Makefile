build:
	docker build -t abcd:latest .

deploy:
	kubectl apply -f k8s/namespace.yml
	kubectl apply -f k8s/config.yml
	kubectl apply -f k8s/a/deploy.yml
	kubectl apply -f k8s/a/expose.yml
	kubectl apply -f k8s/b/deploy.yml
	kubectl apply -f k8s/b/expose.yml
	kubectl apply -f k8s/c/deploy.yml
	kubectl apply -f k8s/c/expose.yml
	kubectl apply -f k8s/d/deploy.yml
	kubectl apply -f k8s/d/expose.yml
