import { useState } from 'react';

const useCreate = ( url, id, props, redirectTo ) => {

  const [ state, setState ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(null);
  const [ error, setError ] = useState(null);

  const createData = (data)=> {
    setIsLoading(true)
    fetch(`/${url}/${id}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content
      },
      method: 'POST'
    })
    .then((response)=>{
      if(response.status === 200){
          setIsLoading(false)
          return(response.json())
        }
    })
    .then((data) => {
      setState(data);
      props.history.push(`/${redirectTo}`)
    })
    .catch((err) => {
      setIsLoading(true)
      if(err) {
        setError(err)
      }
    })
  }

  return [
    createData,
    isLoading,
    error, 
  ]
};

export default useCreate;