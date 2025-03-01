console.log("Hello");

let name1 = "Casper";

var name2 = "outdated";

console.log(name1);

const name3 = "what";

console.log(name2);

// array
let nums = [1, 2, 3, 4, 5];

let found = false;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 3) {
    console.log("We have found 6 at index" + i);
    found = true;
    break;
  }
}

if (!found) {
  console.log("We didn't have 6");
}
