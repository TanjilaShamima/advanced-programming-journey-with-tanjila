// Input Pattern of Array
// List of Numbers
// List of Strings
// List of Objects
// List of Arrays
// Matrix / grid
// Frequency data
// intervals
// sorted list
// rotated sorted list



// 8 Categories of Array Operations
// 1. Traversal
// 2. Searching
// 3. Insertion
// 4. Deletion
// 5. Updating
// 6. Sorting
// 7. Merging
// 8. Resizing
// 9. Reversing
// 10. Aggregation (sum, max, min, average, etc.)
// 11. Transformation


// Important Complexities of Array Operations
// 1. Traversal: O(n)
// 2. Searching: O(n) for unsorted, O(log n) for sorted
// 3. Insertion: O(n) in worst case (if inserting at the beginning or middle), O(1) if inserting at the end (amortized)
// 4. Deletion: O(n) in worst case (if deleting from the beginning or middle), O(1) if deleting from the end
// 5. Updating: O(1)
// 6. Sorting: O(n log n) for efficient algorithms like merge sort, quicksort, etc.
// 7. Merging: O(n + m) where n and m are the sizes of the two arrays
// 8. Resizing: O(n) when resizing an array (if using a dynamic array implementation)
// 9. Reversing: O(n)
// 10. Aggregation: O(n)
// 11. Transformation: O(n)


// Most Important build in Array Methods
// 1. push() - O(1) amortized
// 2. pop() - O(1)
// 3. shift() - O(n)
// 4. unshift() - O(n)
// 5. splice() - O(n) in worst case
// 6. slice() - O(n)
// 7. concat() - O(n + m) where n and m are the sizes of the arrays being concatenated
// 8. forEach() - O(n)
// 9. map() - O(n)
// 10. filter() - O(n)
// 11. reduce() - O(n)
// 12. find() - O(n)
// 13. findIndex() - O(n)
// 14. includes() - O(n)
// 15. indexOf() - O(n)
// 16. lastIndexOf() - O(n)
// 17. sort() - O(n log n) for efficient algorithms
// 18. reverse() - O(n)
// 19. join() - O(n)
// 20. split() - O(n)
// 21. flat() - O(n) where n is the total number of elements in the array and its sub-arrays
// 22. flatMap() - O(n) where n is the total number of elements in the array and its sub-arrays
// 23. fill() - O(n)
// 24. copyWithin() - O(n)
// 25. entries() - O(1) to create the iterator, O(n) to iterate through all entries
// 26. keys() - O(1) to create the iterator, O(n) to iterate through all keys
// 27. values() - O(1) to create the iterator, O(n) to iterate through all values
// 28. from() - O(n) where n is the length of the array-like or iterable object being converted
// 29. of() - O(n) where n is the number of arguments passed to the method
// 30. isArray() - O(1)


// which method is best for which operation?
// 1. Traversal: forEach(), map(), for...of loop
// 2. Searching: find(), findIndex(), includes(), indexOf(), lastIndexOf()
// 3. Insertion: push(), unshift(), splice()
// 4. Deletion: pop(), shift(), splice()
// 5. Updating: direct index assignment (e.g., arr[index] = newValue), map() for creating a new array with updated values
// 6. Sorting: sort()
// 7. Merging: concat(), spread operator ([...arr1, ...arr2])
// 8. Resizing: push() for adding elements, pop() for removing elements
// 9. Reversing: reverse()
// 10. Aggregation: reduce()
// 11. Transformation: map(), flatMap() for flattening and transforming in one step


// which method is best for which situation?
// 1. If you need to modify the original array, use methods like 
// push(), 
// pop(), 
// shift(), 
// unshift(), 
// splice(), 
// sort(), 
// reverse(), 
// fill(), 
// copyWithin().

// 2. If you want to create a new array based on the original array, use methods like 
// map(), 
// filter(), 
// reduce(), 
// concat(), 
// slice(), 
// flat(), 
// flatMap().
// Array.from() can also be used to create a new array from an array-like or iterable object.


// 3. If you need to check for the presence of an element, use 
// includes() for primitive types and 
// find() or 
// findIndex() for objects.

// 4. If you need to iterate over the array without modifying it, use forEach() or a for...of loop.

// 5. If you want to find single element based on a condition, use 
// find() or findIndex().
// reduce() ====> can also be used for more complex conditions or to accumulate values based on a condition.
// some()  ====>  can be used to check if at least one element satisfies a condition, while every() can be used to check if all elements satisfy a condition.
// includes() ====> can be used to check for the presence of a specific value in the array, but it does not work for objects or complex conditions.
// indexOf() and lastIndexOf() can be used to find the index of a specific value in the array, but they also do not work for objects or complex conditions.