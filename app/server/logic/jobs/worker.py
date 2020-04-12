import time
from .engine import Engine
import datetime, threading, time, os

intervalMins = 10

def work():
    next_call = time.time()
    while True:
        if "ENV" in os.environ:
            if os.environ['ENV'] == "production":
                next_call = next_call+(60*intervalMins)
            else:
                next_call = next_call+60
        else:
            next_call = next_call+60        # DEBUG
        time.sleep(next_call - time.time())
        Engine.execute_calculation()


