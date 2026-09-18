# smallest element in an array

def find_smallest_element(arr):
    if len(arr) == 0:
        return None  # Return None for an empty array
    smallest = arr[0]  # Initialize smallest with the first element

    for i in arr:
        if i < smallest:
            smallest = i  # Update smallest if current element is smaller
    return smallest


# Example usage:
arr = [3, 5, 7, 2, 8]
print(find_smallest_element(arr))  # Output: 2