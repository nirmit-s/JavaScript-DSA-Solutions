let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function largestElement(A){
    // Code here

    let largest = Number.NEGATIVE_INFINITY;

    for(let index = 0; index < A.length; index++){
        if(A[index] > largest){
            largest = A[index];
        }
    }

    return largest;
}

// --------- Do NOT edit Below this line -----------
function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each])
  } 
}

let n = parseInt(readLine())
let A=readLine().split(" ")
ConvertToNumber(A)
console.log(largestElement(A))
