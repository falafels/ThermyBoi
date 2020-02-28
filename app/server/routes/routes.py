import random
import json
from flask import Flask, render_template, request, jsonify
from logic.jobs.engine import Engine
from flask_cors import CORS


app = Flask(__name__, static_folder='../../templates/static/dist', template_folder='../../templates/static')
CORS(app)

calc = Engine()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get')
def getTemp():
    return json.dumps(calc.get_temp())

@app.route('/post', methods=['POST'])
def postTemp():
    calc.add_temp(request.args.get("temp"))
    return jsonify({"success": True})

@app.route('/getRooms') # take note of this decorator syntax, it's a common pattern
def getRooms():
    # It is good practice to only call a function in your route end-point,
    # rather than have actual implementation code here.
    # This allows for easier unit and integration testing of your functions.
    return get_rooms()


def get_rooms():
    rooms = ['ITB 137', 'ITB 139', 'ITB AB102']
    return json.dumps(rooms)
