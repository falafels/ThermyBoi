import time
from .engine import Engine
import datetime, threading, time

intervalMins = 15

def work():
    next_call = time.time()
    while True:
        # next_call = next_call+(60*intervalMins)   PROD
        next_call = next_call+20    # For Testing purposes
        time.sleep(next_call - time.time())
        Engine.execute_calculation()


