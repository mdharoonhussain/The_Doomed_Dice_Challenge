// PART-A
// 1.
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5, 6];

let total = 0;
for(let i=0;i<arr1.length;i++) {
    for(let j=0;j<arr2.length;j++) {
        total++
    }
}
console.log(total)


// 2. 
const new_arr1 = [1, 2, 3, 4, 5, 6];
const new_arr2 = [1, 2, 3, 4, 5, 6];

let stack = [];
var sum;
for (let i = 0; i < new_arr1.length; i++) {
    stack[i] = [];
  for (let j = 0; j < new_arr2.length; j++) {
    stack[i][j] = 0;
  }
}
// console.log(stack);

for (let i = 0; i < new_arr1.length; i++) {
  for (let j = 0; j < new_arr2.length; j++) {
     sum = new_arr1[i] + new_arr2[j];
    stack[i][j] = sum;
  }
}
// console.log(sum);
// console.log(stack);

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
// console.log(empty_arr);

// 3.
const dieA = [1, 2, 3, 4, 5, 6];
const dieB = [1, 2, 3, 4, 5, 6];

const st = [];

for (let i = 0; i < dieA.length; i++) {
  st[i] = [];
  for (let j = 0; j < dieB.length; j++) {
    st[i][j] = 0;
  }
}

for (let i = 0; i < dieA.length; i++) {
  for (let j = 0; j < dieB.length; j++) {
    const sum = dieA[i] + dieB[j];
    st[i][j] = sum;
  }
}

const sumOccurrences = [];
for (let i = 0; i < 12; i++) {
  sumOccurrences[i] = 0;
}
for (let i = 0; i < st.length; i++) {
  for (let j = 0; j < st[i].length; j++) {
    const sum = st[i][j];
    sumOccurrences[sum - 2]++;
  }
}

console.log("Probability of Sums:");
for (let sum = 2; sum <= 12; sum++) {
  const probability = sumOccurrences[sum - 2] / (dieA.length * dieB.length);
  console.log(`P(Sum = ${sum}) = ${probability.toFixed(3)}`);
}


// PART-B
// 2. 
function undoom_dice(Die_A, Die_B) {
  const newDieA = transformDieA(Die_A);
  const newDieB = Die_B;

  return {
    New_Die_A: newDieA,
    New_Die_B: newDieB,
  };
}

function countOccurrences(dieA, dieB, target) {
  let count = 0;
  for (let i = 0; i < dieA.length; i++) {
    for (let j = 0; j < dieB.length; j++) {
      if (dieA[i] + dieB[j] === target) {
        count++;
      }
    }
  }
  return count;
}

function transformDieA(Die_A) {
  const transformedDieAFaces = [];

  for (let i = 0; i < Die_A.length; i++) {
    const originalSpots = Die_A[i];

    let transformedSpots;

   if (originalSpots > 4) {
  transformedSpots = 4;
 } else {
  transformedSpots = originalSpots;
}

    transformedDieAFaces.push(transformedSpots);
  }

  return transformedDieAFaces;
}

const dieAFaces = [1, 2, 3, 4, 5, 6];
const dieBFaces = [1, 2, 3, 4, 5, 6];

const transformedDice = undoom_dice(dieAFaces, dieBFaces);

console.log("Original Dice A:", dieAFaces);
console.log("Transformed Dice A:", transformedDice.New_Die_A);
console.log("Original Dice B:", dieBFaces);
console.log("Transformed Dice B:", transformedDice.New_Die_B);

