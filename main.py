# PART-A
# 1.
arr1 = [1, 2, 3, 4, 5, 6]
arr2 = [1, 2, 3, 4, 5, 6]

total = len(arr1) * len(arr2)

print("Total Combinations:", total)

# 2.
new_arr1 = [1, 2, 3, 4, 5, 6]
new_arr2 = [1, 2, 3, 4, 5, 6]

stack = [[0] * 6 for _ in range(6)]

for i in range(len(new_arr1)):
    for j in range(len(new_arr2)):
        sum = new_arr1[i] + new_arr2[j]
        stack[i][j] = sum

print("Distribution of Combinations:")
for row in stack:
    string = ""
    for num in row:
        string += str(num) + " "
    print(string)

# 3.
diceA = [1, 2, 3, 4, 5, 6]
diceB = [1, 2, 3, 4, 5, 6]

st = [[0] * 6 for _ in range(6)]

for i in range(len(diceA)):
    for j in range(len(diceB)):
        sum = diceA[i] + diceB[j]
        st[i][j] = sum

sumOccurrences = [0] * 12
for row in st:
    for num in row:
        sumOccurrences[num - 2] += 1

print("Probability of Sums:")
for sum in range(2, 13):
    probability = sumOccurrences[sum - 2] / (len(diceA) * len(diceB))
    print(f"P(Sum = {sum}) = {probability:.3f}")


# PART-B
# 2.

def undoom_dice(Die_A, Die_B):
    newDieA = transformDieA(Die_A)
    newDieB = Die_B
    return {
        'New_Die_A': newDieA,
        'New_Die_B': newDieB
    }

def countOccurrences(dieA, dieB, target):
    count = 0
    for i in range(len(dieA)):
        for j in range(len(dieB)):
            if dieA[i] + dieB[j] == target:
                count += 1
    return count

def transformDieA(Die_A):
    transformedDieAFaces = []
    for i in range(len(Die_A)):
        originalSpots = Die_A[i]
        if originalSpots > 4:
            transformedSpots = 4
        else:
            transformedSpots = originalSpots
        transformedDieAFaces.append(transformedSpots)
    return transformedDieAFaces

dieAFaces = [1, 2, 3, 4, 5, 6]
dieBFaces = [1, 2, 3, 4, 5, 6]
transformedDice = undoom_dice(dieAFaces, dieBFaces)
print("Original Dice A:", dieAFaces)
print("Transformed Dice A:", transformedDice['New_Die_A'])
print("Original Dice B:", dieBFaces)
print("Transformed Dice B:", transformedDice['New_Die_B'])




