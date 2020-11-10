import { useState, useEffect } from 'react';

const readData = ( url, id ) => {
  
  const [ state, setState ] = useState(null);
  const [ error, setError ] = useState(null);

  // useEffect(async () => {
  //   const fetchData = async () =>{
  //     setIsLoading(true)
  //     try{
  //       const res = await fetch(`/${url}s/${id}`)
  //       const json = await res.json()
  //         setState(json);
  //         setIsLoading(false)
  //       } catch (error) {
  //         setError(error)
  //       }
  //       fetchData()
  //       console.log('readDate:',json)
  // }
  // }, [])

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
    error
  ]
};

export default readData;