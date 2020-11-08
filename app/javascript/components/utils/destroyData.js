const destroyData = ( url, id, props ) => {
  
  const deleteData = ()=> {
    return fetch(`/${url}/${id}` ,{
      headers: {
        'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content
      },
      method: 'DELETE'
    })
    .then((response)=> {
      if(response.ok){
        props.history.push('/allblogs')
      }
    })
  }

  return [
    deleteData
  ]
};

export default destroyData;