import { useState } from "react";
import { Error } from "../Error";
import { Loading } from "../loading";

export function Login() {
  const [status, setStatus] = useState("ok");
  const [loginText, setLoginText] = useState("");
  const [customerDetails, setCustomerDetails] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setCustomerDetails({
      ...customerDetails,
      [fieldName]: fieldValue,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(customerDetails);

    setStatus("loading");
    let url = "http://localhost:3000/api/v1/services/auth";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerDetails),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();

      console.log(data);

      if (data.length === 0) {
        setLoginText("Profile not found");
      } else {
        setLoginText("Login Succesful!");
        setStatus("ok");
      }
    } catch (error) {
      console.error("Error fetching data", error);
      setStatus("Error");
    }
  };

  return (
    <div className="login-div">
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
      {status === "ok" && (
        <form onSubmit={handleSubmit} id="profile-form">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              USERNAME
            </label>
            <input
              name="username"
              type="text"
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputUser"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              PASSWORD
            </label>
            <input
              name="password"
              type="password"
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      )}
      <h1 id="login-h1">{loginText}</h1>
      <label className="new-customer form-check-label" htmlFor="exampleCheck1">
        ARE YOU A NEW CUSTOMER?
      </label>

      <button type="submit" className="btn btn-primary">
        REGISTER HERE!
      </button>
    </div>
  );
}
