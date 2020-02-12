release: python manage.py migrate
web: gunicorn djreact.wsgi --log-file -
heroku ps:scale web=1