// src/components/Error.jsx

import React from 'react';

function Error({ message }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
      <p>❌ Something went wrong!</p>
      <p>{message}</p>
    </div>
  );
}

export default Error;