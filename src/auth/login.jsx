import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import FormInput from "../add-todo/components/form-input";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/user/loginThunk";

function LoginForm({ toggleForm }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, status, error } = useSelector((state) => state.login);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      setFormData({ email: "", password: "" });
      setErrors({});
    }
  };

  // Use useEffect to navigate after successful login
  useEffect(() => {
    if (status.status === "success" && user) {
      navigate("/homepage");
    }
  }, [status, user, navigate]);

  return (
    <form className="form login-form" onSubmit={handleSubmit} noValidate>
      <div>
        <FormInput
          name="email"
          label="EMAIL"
          handleChange={handleChange}
          value={formData.email}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <FormInput
          name="password"
          label="PASSWORD"
          handleChange={handleChange}
          value={formData.password}
        />
        {status === "error" && <p style={{ color: "red" }}>{error}</p>}
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button className="button" type="submit">LOGIN</button>
      <p>Don't have an account? <span className="toggle-text" onClick={toggleForm}>REGISTER</span></p>
    </form>
  );
}

export default LoginForm;
