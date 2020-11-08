import { useState } from 'react';

const useForm = ( user_id ) => {
  
  const [ state, setState ] = useState({});

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
  }

  const handleInputChange = (event) => {
    event.persist();
    setState(state=>({...state, user_id: `${user_id}` }))
    setState(state => ({...state, [event.target.name]: event.target.value}));
  }

  return [
    handleInputChange,
    handleSubmit
  ]
}

export default useForm;