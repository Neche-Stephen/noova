import React, { useState } from 'react';

const LodgeForm = () => {
  const [formData, setFormData] = useState({
    lodgeName: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lodge Name:', formData.lodgeName);
    console.log('Description:', formData.description);
    // You can perform further actions with the form data, such as sending it to a server or storing it in state.
  };

  return (
    <div>
      <h2>Add Lodge Details Here</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lodgeName">Lodge Name:</label>
          <input
            type="text"
            id="lodgeName"
            name="lodgeName"
            value={formData.lodgeName}
            onChange={handleInputChange}
            placeholder="Enter lodge name"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter lodge description"
          />
        </div>
        <div>
          <label htmlFor="picture">Add Picture:</label>
          <textarea
            id="picture"
            name="picture"
            value={formData.picture}
            onChange={handleInputChange}
            placeholder="Enter lodge photos"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LodgeForm;
