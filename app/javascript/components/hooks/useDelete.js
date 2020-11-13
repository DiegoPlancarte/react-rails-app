import { useState } from 'react';

const useUpdate = ( url, id, props, redirectTo ) => {

  const [ state, setState ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(null);
  const [ error, setError ] = useState(null);

  const deleteData = (data)=> {
    setIsLoading(true)
    return fetch(`/${url}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content
      },
      method: 'DELETE'
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
    deleteData, 
    isLoading,
    error
  ]
};

export default useUpdate;