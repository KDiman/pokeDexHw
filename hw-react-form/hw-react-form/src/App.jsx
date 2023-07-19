import { useState } from "react";
import FormInput from "./components/formInput";
import registeredUsers from "./components/RegisteredUsers";

function App() {
  const validPass = new RegExp(
    `(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}`
  );
  const [userErrorMessage, setUserErrorMessage] = useState("");
  const [passErrorMessage, setPassErrorMessage] = useState("");
  const [passValErrorMessage, setPassValErrorMessage] = useState("");
  const [Dialog, setDialog] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      label: "USERNAME:",
      errorMessage: userErrorMessage,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      label: "PASSWORD:",
      errorMessage: passErrorMessage,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      label: "CONFIRM PASSWORD:",
      errorMessage: passValErrorMessage,
    },
  ];

  const usernameValidation = () => {
    for (let i = 0; i < registeredUsers.length; i++) {
      if (values.username === registeredUsers[i].username) {
        return false;
      }
    }
    setUserErrorMessage("");
    return true;
  };
  const passValidation = () => {
    if (!validPass.test(values.password)) {
      return false;
    }
    setPassErrorMessage("");
    return true;
  };
  const passConfirmation = () => {
    if (values.confirmPassword != values.password) {
      return false;
    }
    setPassValErrorMessage("");
    return true;
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (passConfirmation() === false) {
      setDialog(false);
      setPassValErrorMessage("Those passwords didn't match. Please try again.");
    }

    if (!values.username || !values.password || !values.confirmPassword) {
      setUserErrorMessage(
        "Please enter valid username / username cannot be blank"
      );
      setPassErrorMessage(
        "Please enter valid password / password cannot be blank"
      );
      setPassValErrorMessage(
        "Please enter valid password / password cannot be blank"
      );
    } else if (usernameValidation() === false) {
      setDialog(false);
      setUserErrorMessage("Username is taken");
    } else if (passValidation() === false) {
      setDialog(false);
      setPassErrorMessage(
        "Please enter valid password / password cannot be blank"
      );
    } else if (
      usernameValidation() === true &&
      passValidation() === true &&
      passConfirmation() === true
    ) {
      setDialog(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>REGISTRATION PAGE</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <dialog open={Dialog} className="regSucces">
          <h3>Registration Sucess!</h3>
        </dialog>
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
