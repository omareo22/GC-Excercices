let name1 = "Ada Lovelace";
let name2 = "Charles Lovelace";
let name3 = "Brendan Lovelace";

//name 1 longest?
if (name2.length < name1.length && name3.length < name1.length) {
  console.log(`${name1} is the longest name`);
}
// name 2 longest?
else if (name1.length < name2.length && name3.length < name2.length) {
  console.log(`${name2} is the longest name`);
}
// name 3 longest?
else if (name1.length < name3.length && name2.length < name3.length) {
  console.log(`${name3} is the longest name`);
} else {
  //all three are equal
  if (name1.length === name2.length && name1.length === name3.length) {
    console.log(
      `All three names ${name1}, ${name2}, ${name3} are all the same length`
    );
  }
  // name 1 and 2 are equal
  else if (name1.length === name2.length) {
    console.log(`${name1} and ${name2} tie for the same length`);
  }
  // name 2 and 3 are equal
  else if (name2.length === name3.length) {
    console.log(`${name2} and ${name3} tie for the same length`);
  }
  // name 1 and 3 are equal
  else {
    console.log(`${name1} and ${name3} tie for the same length`);
  }
}
