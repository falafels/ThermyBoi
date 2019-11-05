from app import app

@app.route('/')
@app.route('/index')
def index():
	#backend goes here
    return "Hello, World!"