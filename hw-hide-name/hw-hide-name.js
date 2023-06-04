function hideNames() {
  let firstname = document.getElementById("firstName").value;

  let lastname = document.getElementById("lastName").value;

  let letters = /^[A-Za-z ]+$/;

  let regex = /\b(\S{2})(\S{1,})(\S)\b/gi;

  let regex2 = /\b(\S)(\S{1,})/gi;

  if (firstname.match(letters) && lastname.match(letters)) {
    alert("Name is accepted");
    console.log("Firsta Name:", firstname);

    console.log("Last Name:", lastname);

    document.write(
      firstname.replace(regex, function (a, $1, $2, $3) {
        return $1 + $2.replace(/./gi, "*") + $3;
      })
    );

    document.write(
      " " +
        lastname.replace(regex2, function (a, $1, $2) {
          return $1 + $2.slice(99, 99) + ".";
        })
    );
  } else {
    alert("Input provided is not valid name");
    document.write("Input provided is not valid name");
    console.log("Input provided is not valid name")
  }
}
