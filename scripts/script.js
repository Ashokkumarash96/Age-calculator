function calculateAge() {
  let birthday = new Date(document.getElementById("birthday").value);
  let today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  let m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  document.getElementById("output").innerHTML = "You are " + age + " years old";
}
