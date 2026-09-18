def find_largest(arr):
    if len(arr) == 0:
        return None  # Return None for an empty array
    largest = arr[0]  # Initialize largest with the first element

    for i in arr:
        if i > largest:
            largest = i  # Update largest if current element is greater
    return largest

# Example usage:
arr = [3, 5, 7, 2, 8]
print(find_largest(arr))  # Output: 8