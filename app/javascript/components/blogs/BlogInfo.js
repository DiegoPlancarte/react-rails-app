import React, { useCallback, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import useRead from '../hooks/useRead'
import destroyData from '../utils/destroyData'

const BlogInfo = (props) => {

  const [ state, setState ] = useRead("blog", `${props.match.params.id}`)
  const [ favs, setFavs ] = useRead("favorite_blog", "")
  const [ deleteData ] = destroyData("blog", `${props.match.params.id}`, props)

  const editData = useCallback((data)=> {
    return fetch (`/favorite_blogs/${favs.id}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content
      },
      method: 'PUT'
    })
    .then ((response)=> {
      if (response.ok){
        // props.history.push('/fav_blogs')
      }
    })
  }, [favs])

  if (favs === null || state === null ) {
    return <div>Loading...</div>
  }  

  const creator = () => {
    return props.current_user.id === state.user_id
  }

  let my_favs = favs.fav_blogs.split(', ').map(x=>+x).sort()
  console.log('before click:',favs)
  
  const toggleFavorite = () => {
    let list = my_favs
    let index = my_favs.indexOf(state.id)
    if (index > -1) {
      list.splice(index, 1)
      setFavs(favs => ({...favs, fav_blogs: list.join(', ')}))
    } else {
      list.push(state.id)
      setFavs(favs => ({...favs, fav_blogs: list.join(', ')}))
    }
    console.log('after click:',favs)
    editData(favs)
  }

  const fav_button = () => {
    if (my_favs.includes(state.id)) {
      return 'Unfavorite'
    } else {
      return 'Favorite'
    }
  }


  return (
    <React.Fragment>
      <Button onClick={toggleFavorite} >{ my_favs.includes(state.id)? 'Unfavorite' : 'Favorite' }</Button>
      <h1>{state.title}</h1>
      <p>{state.body}</p>
      <p>{state.user_id}</p>
      { creator() &&
      <Link to={`/editblog/${state.id}`}><Button>Edit Blog</Button></Link>
      }
      { creator() &&
      <Button onClick={ deleteData } className="btn btn-danger" >Delete Blog</Button>
      }
    </React.Fragment>
  );
};

export default BlogInfo;