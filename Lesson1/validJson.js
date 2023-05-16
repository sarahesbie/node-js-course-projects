let jsonObj = [
  { id: 1, username: "Sarah", Lastname: "Brown" },
  { id: 1, username: "Ally", Lastname: "Watson" },
  { id: 1, username: "Lara", Lastname: "Salameh" },
];

for (var i = 0; i < jsonObj.length; i++) {
  if (jsonObj[i].id == 1) {
    jsonObj[i].username = "Jan the Man";
    break;
  }
}

console.log(jsonObj);
