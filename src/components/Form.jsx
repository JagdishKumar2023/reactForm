import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [tel, setTel] = useState("");

  const [gender, setGender] = useState("");

  const [userData, setUserData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, { id: Date.now(), name, email, tel, gender }]);
    setName("");
    setEmail("");
    setTel("");
    setGender("");
  };

  console.log(userData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="enter your phone number"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <input
          type="gender"
          placeholder="enter gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
