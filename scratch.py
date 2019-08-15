# [2, 5, -3, 1]


# def contiguous(array):
#     found = []
#     sum = 0
#     for i in array:
#         if sum + i < 0:
#             found.append(sum)
#             sum = 0
#         else:
#             sum += i
#             found.append(sum)
#     found.append(sum)

#     return max(found)

# print(contiguous([2, 3, -8, -1, 2, 4, -2, 3]))

# #get max of arr[0], then if arr_j[1] - max > duration && arr_i[1] - max >duration

def time_planner(first_array, second_array, duration):
    i = 0
    shortest_arr = min(first_array, second_array)
    while i < len(shortest_arr):
        maximum = max(first_array[i][0], second_array[i][0])
        if first_array[i][1] - maximum >= duration and second_array[i][1] - maximum >= duration:
            return [maximum, maximum + duration]
        i += 1
    
    return []

print(time_planner( [[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 8))
print(time_planner( [[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 72]], 12))
print(time_planner( [[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 12))












