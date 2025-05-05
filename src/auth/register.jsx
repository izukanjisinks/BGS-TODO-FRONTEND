import React, { useState } from "react";
import FormInput from "../add-todo/components/form-input";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/user/registerThunk"; 

function RegistrationForm({toggleForm}) {

  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.register);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error on input change
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    }

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

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(registerUser(formData));
    }
  };

  return (
    <form className="form register-form" onSubmit={handleSubmit} noValidate>
      
      <div>
      <FormInput
          name="username"
          label="USERNAME"
          handleChange={handleChange}
          value={formData.username}
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
      
      <div>
      <FormInput
          name="email"
          label="EMAIL"
          handleChange={handleChange}
          value={formData.email}
      />
      {status['status'] === 'error' ? <p style={{ color: "red" }}> {status['message']}</p>  : null} 
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
      <FormInput
          name="password"
          label="PASSWORD"
          handleChange={handleChange}
          value={formData.password}
      />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <div>
      <FormInput
          name="confirmPassword"
          label="CONFIRM PASSWORD"
          handleChange={handleChange}
          value={formData.confirmPassword}
      />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        )}
      </div>

      <button className="button" type="submit">REGISTER</button>
      <p>Already have an account? <span className="toggle-text" onClick={toggleForm}> LOGIN </span> </p>
    </form>
  );
}

export default RegistrationForm;
