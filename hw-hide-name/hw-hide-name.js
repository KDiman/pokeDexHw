function hideName(fullname) {
  let letters = /^[A-Za-z ]+$/;

  let numbers = /\d+/;

  let regex = /\b(\S{2})(\S{1,})(\S)\b/gi;

  let regex2 = /\b(\S)(\S{1,})/gi;

  let fullnameStr = fullname.toString();

  let splitfullnameIndex = fullnameStr.split(" ");

  let totalIndexofFullname = splitfullnameIndex.length;

  //   console.log(totalIndexofFullname);

  let togetlastname = fullnameStr;

  let firstName = fullnameStr.substring(0, fullnameStr.lastIndexOf(" "));

  let replacefirstName = firstName.replace(regex, function (a, $1, $2, $3) {
    return $1 + $2.replace(/./gi, "*") + $3;
  });

  let replacelastName =
    " " +
    getlastName(togetlastname).replace(regex2, function (a, $1, $2) {
      return $1 + $2.slice(99, 99) + ".";
    });

  let HiddenFullname =
    replacefirstName.toUpperCase() + replacelastName.toUpperCase();

  function getlastName(togetlastname) {
    let splitname = togetlastname.split(" ");
    // console.log(splitname);
    let lengthofName = splitname.length;
    let indexofName = lengthofName - 1;
    // console.log(indexofName);
    return splitname[indexofName];
  }
  //   console.log(getlastName(togetlastname))

  if (totalIndexofFullname <= 1) {
    console.log("Input provided is not valid name");
    return "Input provided is not valid name";
  }

  if (fullname.match(letters)) {
    console.log(HiddenFullname);
    return HiddenFullname;
  }
  if (fullnameNumbers.match(numbers)) {
    console.log("Input provided is not valid name");
    return "Input provided is not valid name";
  } else {
    console.log("Input provided is not valid name");
    return "Input provided is not valid name";
  }
}

hideName("Anonas Mayaman");
hideName("catalina Bongga");
hideName("Maria Josefina Alvarez");
hideName("Rizal");
hideName("aj3j3j3");
hideName("MinD_ContRoL~!");
hideName(143);
