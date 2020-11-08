import { useState } from 'react';

const useForm = (initialValue) => {
  
  const [ state, setState ] = useState({});

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    initialValue;
  }

  const handleInputChange = (event) => {
    event.persist();
    setState(state=>({...state, user_id: userId() }))
    setState(state => ({...state, [event.target.name]: event.target.value}));
  }

  return [
    state,
    setState,
    handleInputChange,
    handleSubmit
  ]
}

export default useForm;