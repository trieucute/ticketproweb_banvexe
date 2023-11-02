import React, { useRef } from 'react';
import AutocompleteCity from './inputLocation';

const Books = () => {
  const startLocationRef = useRef(null);
  const endLocationRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const startLocation = startLocationRef.current.value;
    const endLocation = endLocationRef.current.value;

    // Thực hiện xử lý submit với các giá trị startLocation và endLocation
  
  };

  return (
    <div>
      <h1>Đặt vé</h1>
      <form onSubmit={handleSubmit}>
        <AutocompleteCity ref={startLocationRef} />
        <AutocompleteCity ref={endLocationRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Books;
