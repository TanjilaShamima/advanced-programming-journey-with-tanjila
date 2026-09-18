def binary_search(arr, target):
    arr = sorted(arr)  # Ensure the array is sorted
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = len(arr) // 2
        if arr[mid] == target:
            return mid  # Target found at index mid
        elif arr[mid] < target:
            left = mid + 1  # Search in the right half
        else:
            right = mid - 1  # Search in the left half

    return -1  # Target not found


# Example usage:
numbers = input("Enter numbers separated by spaces: ").split()
numbers = [int(num) for num in numbers]
target = int(input("Enter the target number: "))
result = binary_search(numbers, target)

print(f"The target number {target} is at index: {result}" if result != -1 else f"The target number {target} is not in the list.")