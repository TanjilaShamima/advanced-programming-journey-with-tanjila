# python built-in methods for array

# 1. append() - Adds an element at the end of the list
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)

# 2. extend() - Add the elements of a list (or any iterable), to the end of the current list
fruits = ["apple", "banana", "cherry"]
more_fruits = ["mango", "pineapple", "papaya"]

fruits.extend(more_fruits)
print(fruits)

# 3. insert() - Adds an element at the specified position
fruits = ["apple", "banana", "cherry"]
fruits.insert(1, "orange")
print(fruits)

# 4. remove() - Removes the first item with the specified value
fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")
print(fruits)

# 5. pop() - Removes the element at the specified position
fruits = ["apple", "banana", "cherry"]
fruits.pop(1)
print(fruits)

# 6. clear() - Removes all the elements from the list
fruits = ["apple", "banana", "cherry"]
fruits.clear()
print(fruits)

# 7. index() - Returns the index of the first element with the specified value
fruits = ["apple", "banana", "cherry"]
index = fruits.index("banana")
print(index)

# 8. count() - Returns the number of elements with the specified value
fruits = ["apple", "banana", "cherry", "banana"]
count = fruits.count("banana")
print(count)

# 9. sort() - Sorts the list in ascending order
fruits = ["apple", "banana", "cherry"]
fruits.sort()

