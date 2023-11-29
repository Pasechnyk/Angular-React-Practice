import "./form.css";
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nick: '',
    email: '',
    gender: '',
    age: '',
    photo: '', 
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validations
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      console.log('This form is valid! ', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Nick
    if (!data.nick.trim()) {
      errors.nick = 'Nick is required!';
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailRegex.test(data.email.trim())) {
      errors.email = 'Valid email is required!';
    }

    // Gender
    if (!data.gender) {
      errors.gender = 'Gender is required!';
    }

    // Age
    const ageValue = parseInt(data.age, 10);
    if (isNaN(ageValue) || ageValue < 0 || ageValue > 100) {
      errors.age = 'Valid age is required!';
    }

    // Photo
    const photoRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!data.photo.trim() || !photoRegex.test(data.photo.trim())) {
      errors.photo = 'Valid photo URL is required!';
    }

    // Description
    if (!data.description.trim()) {
      errors.description = 'Description is required!';
    }

    return errors;
  };

  // Form
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nick:</label>
        <input
          type="text"
          name="nick"
          value={formData.nick}
          onChange={handleInputChange}
        />
        {errors.nick && <span>{errors.nick}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <span>{errors.gender}</span>}
      </div>

      <div>
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        {errors.age && <span>{errors.age}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <div>
        <label>Photo URL:</label>
        <input
          type="text"
          name="photo"
          value={formData.photo}
          onChange={handleInputChange}
        />
        {errors.photo && <span>{errors.photo}</span>}
      </div>

      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        {errors.description && <span>{errors.description}</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
