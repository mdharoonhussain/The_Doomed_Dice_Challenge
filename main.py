# PART-A
# 1.
# Defining the faces of the dice
arr1 = [1, 2, 3, 4, 5, 6]
arr2 = [1, 2, 3, 4, 5, 6]
# Calculating the total number of combinations
total = len(arr1) * len(arr2)
# Output
print("Total Combinations:", total)

# 2.
# Defining the faces of the dice
new_arr1 = [1, 2, 3, 4, 5, 6]
new_arr2 = [1, 2, 3, 4, 5, 6]
# Initialize a 6x6 matrix for distribution
stack = [[0] * 6 for _ in range(6)]
# Calculate the distribution and fill the matrix
for i in range(len(new_arr1)):
    for j in range(len(new_arr2)):
        sum = new_arr1[i] + new_arr2[j]
        stack[i][j] = sum
# Display the distribution matrix
print("Distribution of Combinations:")
for row in stack:
    string = ""
    for num in row:
        string += str(num) + " "
    print(string)

# 3.
# Defining the faces of the dice
diceA = [1, 2, 3, 4, 5, 6]
diceB = [1, 2, 3, 4, 5, 6]
# Initialize a 6x6 matrix for distribution
st = [[0] * 6 for _ in range(6)]
# Calculate the distribution and fill the matrix
for i in range(len(diceA)):
    for j in range(len(diceB)):
        sum = diceA[i] + diceB[j]
        st[i][j] = sum
# Count occurrences of each sum
sumOccurrences = [0] * 12
for row in st:
    for num in row:
        sumOccurrences[num - 2] += 1
# Calculate and display the probability for each sum
print("Probability of Sums:")
for sum in range(2, 13):
    probability = sumOccurrences[sum - 2] / (len(diceA) * len(diceB))
    print(f"P(Sum = {sum}) = {probability:.3f}")


