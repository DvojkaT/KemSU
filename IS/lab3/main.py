# 1 task
# number_list = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9]
# result = len(set(number_list))
# print(result)
# 2 task
# first_list = [1, 2, 3]
# second_list = [4, 5, 6]
# first_set = set(first_list)
# second_set = set(second_list)
# result = first_set & second_set
# print(len(result))
# 3 task
# first_list = [1, 2, 3, 4]
# second_list = [4, 3, 5, 6]
#
# result = list(set(first_list).intersection(second_list))
# print(result)
# 4 task
# input_elements = input()
# elements = input_elements.split()
# for i in range(len(elements)):
#     elements[i] = int(elements[i])
#
# seen_before = set()
# for element in elements:
#     if element in seen_before:
#         print('YES')
#     else:
#         print('NO')
#         seen_before.add(element)
# 5 task
# words = set()
# for _ in range(int(input())):
#     words.update(input().split())
#
# print(len(words))
# 6 task

# 7 task
# line = "first second third  fourth   first    third"
# words = line.split()
# my_dict = {}
# for word in words:
#     my_dict[word] = my_dict.get(word, 0) + 1
# print(my_dict)

# 8 task
# rows = input()
# my_dict = {}
# for row in range(int(rows)):
#     words = input().split()
#     my_dict[words[0]] = words[1]
#
# syn = input()
# for word in my_dict:
#     if syn in word:
#         print(my_dict.get(syn))
#     elif my_dict[word] == syn:
#         print(word)
# 9 task
# rows = input()
# my_dict = {}
# for row in range(int(rows)):
#     words = input().split()
#     my_dict[words[0]] = my_dict.get(words[0], 0) + int(words[1])
#
# print(my_dict)
#TODO: доделать

# 10 task
