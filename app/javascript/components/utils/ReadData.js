import { useState, useEffect } from 'react';

const readData = ( url, id ) => {
  
  const [state, setState] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
      fetch(`/${url}s/${id}`)
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
    state,
    setState
  ]
};

export default readData;