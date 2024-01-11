// PART-A
// 1.
// Defining the faces of the dice
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5, 6];

// Calculating the total number of combinations
const total = arr1.length * arr2.length;

// Output
console.log("Total Combinations:", total);

// 2. 
// Defining the faces of the dice
const new_arr1 = [1, 2, 3, 4, 5, 6];
const new_arr2 = [1, 2, 3, 4, 5, 6];

// Initialize a 6x6 matrix for distribution
let stack = [];

// Initialize the distribution matrix with 0s
for (let i = 0; i < 6; i++) {
    stack[i] = [];
  for (let j = 0; j < 6; j++) {
    stack[i][j] = 0;
  }
}

// Calculate the distribution and fill the matrix
for (let i = 0; i < new_arr1.length; i++) {
  for (let j = 0; j < new_arr2.length; j++) {
    let sum = new_arr1[i] + new_arr2[j];
    stack[i][j] = sum;
  }
}

// Display the distribution matrix
let empty_arr = [];
console.log("Distribution of Combinations:");
for (let x = 0; x < stack.length; x++) {
  let string = "";
  for (let y = 0; y < stack[x].length; y++) {
    string += stack[x][y] + " ";
    empty_arr.push(string);
  }
  console.log(string);
}
console.log(empty_arr);

// 3.
// Defining the faces of the dice
const dieA = [1, 2, 3, 4, 5, 6];
const dieB = [1, 2, 3, 4, 5, 6];

// Initialize a 6x6 matrix for distribution
const st = [];

// Initialize the distribution matrix with 0s
for (let i = 0; i < 6; i++) {
  st[i] = [];
  for (let j = 0; j < 6; j++) {
    st[i][j] = 0;
  }
}

// Calculate the distribution and fill the matrix
for (let i = 0; i < dieA.length; i++) {
  for (let j = 0; j < dieB.length; j++) {
    const sum = dieA[i] + dieB[j];
    st[i][j] = sum;
  }
}

// Count occurrences of each sum
const sumOccurrences = Array(12).fill(0);
for (let i = 0; i < st.length; i++) {
  for (let j = 0; j < st[i].length; j++) {
    const sum = st[i][j];
    sumOccurrences[sum - 2]++;
  }
}

// Calculate and display the probability for each sum
console.log("Probability of Sums:");
for (let sum = 2; sum <= 12; sum++) {
  const probability = sumOccurrences[sum - 2] / (dieA.length * dieB.length);
  console.log(`P(Sum = ${sum}) = ${probability.toFixed(3)}`);
}
