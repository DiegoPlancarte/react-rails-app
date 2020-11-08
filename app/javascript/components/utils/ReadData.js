import { useState, useEffect } from 'react';

const ReadData = ( url ) => {
  
  const [state, setState] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
      fetch(`/${url}`)
    .then((response)=>{
      if(response.status === 200){
          return(response.json())
        }
      })
      .then((data) => {
        setState(data);
      })
    }
    fetchData()
  }, []);

  return [
    state
  ]
};

export default ReadData;