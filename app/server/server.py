import random
import datetime, threading, time

from routes import routes
from logic.jobs import worker

app = routes.app
timerThread = threading.Thread(target=worker.work)
timerThread.daemon = True
timerThread.start()

if __name__ == '__main__':
    app.run()