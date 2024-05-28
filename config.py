from flask import Flask
import os

app = Flask(__name__)

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY')
    ALLOWED_HOSTS = ['*']

app.config.from_object(Config)
