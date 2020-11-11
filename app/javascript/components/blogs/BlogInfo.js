import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import readDataNew from '../utils/readDataNew'
import updateData from '../utils/updateData'
import destroyData from '../utils/destroyData'

const BlogInfo = (props) => {

  const [ state, setState ] = readDataNew("blog", `${props.match.params.id}`)
  const [ favs, setFavs ] = readDataNew("favorite_blog", "")
  const [ newFavs ] = updateData("favorite_blog", props)
  const [ deleteData ] = destroyData("blog", `${props.match.params.id}`, props)

  if (favs === null || state === null ) {
    return <div>Loading...</div>
  }

  const creator = () => {
    return props.current_user.id === state.user_id
  }

  const my_info = favs.filter((v,i) => {
    return(v.user_id === props.current_user.id)
  })

  const my_favs = my_info[0].fav_blogs.split(', ').map(x=>+x).sort()

  console.log(favs)
  console.log(state)
  
    const toggleFavorite = (event) => {
      let newList = []
      let index = my_favs.indexOf(state.id)
      if (index > -1) {
        newList = my_favs.splice(index, 1)
        setFavs(favs => ({...favs, fav_blogs: newList}))
      } else {
        newList = my_favs.push(state.id)
        setFavs(favs => ({...favs, fav_blogs: newList}))
      }
      newFavs(favs)
    }

  const fav_button = () => {
    let exists = my_favs.indexOf(state.id)
    if (my_favs.includes(state.id)) {
      return (<Button onClick={toggleFavorite} >Unfavorite</Button>)
    } else {
      return (<Button onClick={toggleFavorite} >Favorite</Button>)
    }
  }

  return (
    <React.Fragment>
      { fav_button() }
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