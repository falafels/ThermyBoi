import array as arr
import math
from random import *
import time

class Calculator:
    @staticmethod
    def calculate(tempList):
        # sorts the array in order to determine the middle 50%
        temp_array = sorted(tempList)

        # bounds for the array
        arr_len = len(temp_array)
        a = arr_len / 4
        a = int(round(a))

        b = 3* arr_len / 4
        b = int(round(b))

        arr_two = temp_array[a : b]

        # calculates the average of the array
        average = sum(arr_two) / len(arr_two)
        average = int(average)

        return average