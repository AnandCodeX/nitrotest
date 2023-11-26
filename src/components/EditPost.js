import React, { useState } from 'react';
const EditPost = ({ postId, initialData, onSaveChanges, onCancel }) => {
  const [editedFields, setEditedFields] = useState({ location: initialData.location, author: initialData.author });
  const handleFieldChange = (e) => {
    setEditedFields({ ...editedFields, [e.target.name]: e.target.value });
  };
  const handleSaveChanges = () => {
    onSaveChanges(postId, editedFields);
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
