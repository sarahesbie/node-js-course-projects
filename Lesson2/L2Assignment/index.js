const students = require("./students");

students.find(({ firstName }) => firstName === "Trixie").age = 23;

students.forEach(({ firstName, lastName, age }) => {
  console.log(
    `Name:${firstName} ${lastName}, Age:${
      age !== undefined ? age : " not found"
    }
   `
  );
});
