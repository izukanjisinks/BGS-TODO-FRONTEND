import React, { useState } from "react";
import FormInput from "../add-todo/components/form-input";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/user/loginThunk"; 

function LoginForm({toggleForm}) {

  const dispatch = useDispatch();
  const {user , status, error } = useSelector((state) => state.login);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error on input change
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(loginUser(formData));
    }
  };

  return (
    <form className="form login-form" onSubmit={handleSubmit} noValidate>

      <div>
      <FormInput
          name="email"
          label="EMAIL"
          handleChange={handleChange}
          value={formData.email}
      />
      {/* {status['status'] === 'error' ? <p style={{ color: "red" }}> {status['message']}</p>  : null}  */}
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
      <FormInput
          name="password"
          label="PASSWORD"
          handleChange={handleChange}
          value={formData.password}
      />
      {status['status'] === 'error' ? <p style={{ color: "red" }}> {status['message']}</p>  : null}
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button className="button" type="submit">REGISTER</button>
      <p>Don't have an account? <span className="toggle-text" onClick={toggleForm}>REGISTER</span> </p>
    </form>
  );
}

export default LoginForm;
