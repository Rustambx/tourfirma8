up:
	docker-compose up -d
build:
	docker-compose build
stop:
	docker-compose stop
ps:
	docker-compose ps
down:
	docker-compose down
migrate:
	docker exec tourfirma-php php artisan migrate
rollback:
	docker exec tourfirma-php php artisan migrate:rollback
link:
	docker exec tourfirma-php php artisan storage:link
fixtures:
	docker exec tourfirma-php php artisan load:fixtures
images:
	docker exec tourfirma-php php artisan load:images