import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // ✅ Error state

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // ✅ Basic validation
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors); // ✅ Set errors state

    // Stop submission if errors exist
    if (Object.keys(newErrors).length > 0) return;

    // Otherwise, submit form
    console.log({ username, email, password });

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username} // Controlled input
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email} // Controlled input
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password} // Controlled input
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;