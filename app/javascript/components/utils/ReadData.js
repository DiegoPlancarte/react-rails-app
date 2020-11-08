import { useState, useEffect } from 'react';

const ReadData = ( url, id ) => {
  
  const [state, setState] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
      fetch(`/${url}/${id}`)
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