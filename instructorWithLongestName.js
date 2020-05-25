const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let rank = 0;
  let name = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i]["name"].length > name) {
      name = instructors[i]["name"].length;
      rank = i;
    }
  }
  return instructors[rank];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
