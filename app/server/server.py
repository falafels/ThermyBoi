import random
import datetime, threading, time

from routes import routes
from logic.jobs import worker

app = routes.app

if __name__ == '__main__':
    timerThread = threading.Thread(target=worker.work)
    timerThread.daemon = True
    timerThread.start()
    app.run()