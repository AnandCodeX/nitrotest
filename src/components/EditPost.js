import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditPost = ({ initialData, onSaveChanges, onCancel }) => {
  const navigate = useNavigate();
  const [editedFields, setEditedFields] = useState({
    location: initialData.location,
    author: initialData.author,
  });
  const handleFieldChange = (e) => {
    setEditedFields((x) => ({ ...x, [e?.target?.name]: e?.target?.value }));
  };
  const handleSaveChanges = () => {
    onSaveChanges(editedFields);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={editedFields.location}
          onChange={handleFieldChange}
          required
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={editedFields.author}
          onChange={handleFieldChange}
          required
        />
      </label>
      <button onClick={handleSaveChanges}>Save Changes</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditPost;
