const updateData = ( url, props ) => {
  
  const editData = (data)=> {
    return fetch (`/${url}/${props.match.params.id}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content
      },
      method: 'PUT'
    })
    .then ((response)=> {
      if (response.ok){
        props.history.push(`/${url}info/${props.match.params.id}`)
      }
    })
  }

  return [
    editData
  ]
};

export default updateData;