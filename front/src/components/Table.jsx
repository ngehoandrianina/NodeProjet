import React, { useState } from 'react';

const Modifier = ({ id, onSave }) => {
  return (
    <div>
      <h1> Eto </h1>
    </div>
  )
}

const Row = ({ id, data }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (id, newValue) => {
    console.log(`Saving new value for row ${id}: ${newValue}`);
    setIsEditing(false);
  };

  return (
    <tr>
      <td>{data}</td>
      <td>
        <button onClick={()=>handleEditClick()}>Edit</button>
      </td>
      {isEditing && (
        <td colSpan="2">
          <Modifier id={id} onSave={handleSave} />
        </td>
      )}
    </tr>
  );
};

const Table = () => {
  const rowsData = ['Row 1', 'Row 2', 'Row 3'];

  return (
    <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {rowsData.map((data, index) => (
          <Row key={index} id={index} data={data} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;