import { useState, useEffect } from 'react';

const readDataNew = ( url, id ) => {
  
  const [ state, setState ] = useState(null);
  const [ error, setError ] = useState(null);

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
        .catch((err) => {
          if(err) {
            setError(err)
          }
        })
    }
    fetchData()
  }, []);

  return [
    state,
    setState,
    error
  ]
};

export default readDataNew;