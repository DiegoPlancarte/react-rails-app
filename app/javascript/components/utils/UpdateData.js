const updateData = ( url, props, redirect ) => {
  
  const editData = (data)=> {
    return fetch (`/${url}s/${props.match.params.id}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content
      },
      method: 'PUT'
    })
    .then ((response)=> {
      if (response.ok){
        props.history.push(`/${redirect}`)
      }
    })
  }

  return [
    editData
  ]
};

export default updateData;