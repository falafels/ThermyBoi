import random
import json
from flask import Flask, render_template, request
from flask_cors import CORS

app = Flask(__name__, static_folder='../../templates/static/dist', template_folder='../../templates/static')
CORS(app)

# @app.route('/index')
# def index():
#     rooms = ['ITB 137', 'ITB 139', 'ITB AB102']
#     return render_template('home.html', rooms=rooms)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello') # take note of this decorator syntax, it's a common pattern
def hello():
    # It is good practice to only call a function in your route end-point,
    # rather than have actual implementation code here.
    # This allows for easier unit and integration testing of your functions.
    return get_hello()


def get_hello():
    greeting_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo', 'Hej']
    return json.dumps(random.choice(greeting_list))
