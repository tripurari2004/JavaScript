//while loops

let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

//do-while loops

let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

//for loops

for (let i = 0; i < 5; i++) {
  console.log(i);
}


let i = 0; // we have i already declared and assigned
for (; i < 3; i++) { // no need for "begin"
  console.log(i); // 0, 1, 2
}


for (; i < 3;) {
  console.log(i++);
}


//break and continue

for (let j = 0; j < 5; j++) {
  if (j === 2) {
    continue; // skip the rest of the loop body for j = 2
  }
  console.log(j); // 0, 1, 3, 4
}   


for (let k = 0; k < 5; k++) {
  if (k === 3) {
    break; // exit the loop when k = 3
  }
  console.log(k); // 0, 1, 2
}


//labelled statements

outerLoop: for (let m = 0; m < 3; m++) {
    innerLoop: for (let n = 0; n < 3; n++) {
        if (m === 1 && n === 1) {
            continue outerLoop; // skip to the next iteration of the outer loop
        }
        console.log(`m: ${m}, n: ${n}`);
    }
}

console.log("Finished loops.");

outerLoop: for (let m = 0; m < 3; m++) {
    innerLoop: for (let n = 0; n < 3; n++) {
        if (m === 1 && n === 1) {
            continue innerLoop; // skip to the next iteration of the inner loop
        }
        console.log(`m: ${m}, n: ${n}`);
    }
}