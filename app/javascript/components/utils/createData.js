import { useState } from 'react';

const createData = ( url, props ) => {

  const [ state, setState ] = useState({})
  
  const newData = (data)=> {
    fetch(`/${url}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content
      },
      method: 'POST'
    })
    .then((resp) => {
      if (resp.ok) {
        setState({})
        alert('Your blog has been created!')
        props.history.push(`/allblogs`)
      }
    })
    .catch((err) => {
      if (err) {
        console.log(err)
      }
    })
  }

  return [
    newData
  ]
};

export default createData;