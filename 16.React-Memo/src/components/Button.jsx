import React from 'react';

const Button = React.memo(({ onClick, label }) => {
  return (
    <>
      <button onClick={onClick}>
        {label}
      </button>
    </>
  );
});

export default Button;
