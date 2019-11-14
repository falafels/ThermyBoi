from app import app
from flask import Flask, render_template, request

@app.route('/')
@app.route('/index')
def index():
    rooms = ['ITB 137', 'ITB 139', 'ITB AB102']
    return render_template('home.html', rooms=rooms)
