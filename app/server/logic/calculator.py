import array as arr
import math
from random import *

# creates a list with random number in length
length_list = randrange(5,300,1)
print (length_list)
new_arr = []

# stores random numbers in the array between the viable range
for i in range(length_list):
    new_arr.append(randrange(17,25,1))

# sorts the array in order to determine the middle 50%
temp_array = sorted(new_arr)

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

