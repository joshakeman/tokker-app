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

    # for i in first_array:
    #     print(i[0], i[1])
    #     if second_array[i]:
    #         print ('exists')
    #     # for j in second_array:
    #     #     maximum = max(i[0], j[0])
    #     #     if i[1] - max > duration and j[1] - max > duration:
    #     #         return [maximum, maximum + duration]
    
    return []

print(time_planner( [[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 8))
print(time_planner( [[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 72]], 12))
print(time_planner( [[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 12))












