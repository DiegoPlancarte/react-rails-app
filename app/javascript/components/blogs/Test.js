import React, { useCallback } from 'react';

const Test = () => {

  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, [])

  return ( 
    <React.Fragment>
      <button onClick={handleClick}>Button</button>
    </React.Fragment>
  );
}

export default Test;