import time
from .engine import Engine
import datetime, threading, time

def work():
    next_call = time.time()
    while True:
        next_call = next_call+20
        time.sleep(next_call - time.time())
        Engine.execute_calculation()


