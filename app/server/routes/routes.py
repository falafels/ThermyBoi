import random
import json
from flask import Flask, render_template, request, jsonify
from logic.jobs.engine import Engine
from flask_cors import CORS


app = Flask(__name__, static_folder='../../templates/static/dist', template_folder='../../templates/static')
CORS(app)

calc = Engine()

# @app.route('/')
# def index():
#     return render_template('index.html')

@app.route('/get')
def getTemp():
    if "temp" in request.args:
        print(request.args)
        calc.set_current_temp(request.args.get("temp"))
    return json.dumps(calc.get_temp())

@app.route('/getCurrentTemp')
def getCurrentTemp():
    return json.dumps(calc.get_current_temp())

@app.route('/post', methods=['POST'])
def postTemp():
    calc.add_temp(request.args.get("temp"))
    return jsonify({"success": True})