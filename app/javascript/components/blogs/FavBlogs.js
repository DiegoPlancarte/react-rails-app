import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import useRead from '../hooks/useRead'

const FavBlogs = (props) => {

  const [ state, error ] = useRead("blog", "")
  const [ favs, fav_error ] = useRead("favorite_blog", "")

  if (favs === null || state === null ) {
    return <div>Loading...</div>
  }

  const my_favs = favs.fav_blogs.split(', ').map(x=>+x)

  const fav_blogs = () => {
    let list = []
    state.map((v,i) => {
      my_favs.map((n,index) => {
        if (v.id === n) {
          list.push(v)
        }
      })
    })
    return list
  }

  return (
    <React.Fragment>
      <Link to='/createblog'><Button>Create Blog</Button></Link>
      {fav_blogs().map((v,i) => {
        return(
          <div key={i}>
            <Link to={`/bloginfo/${v.id}`}>{v.title}</Link>
            <p>{v.body}</p>
          </div>
        )
      })}
    </React.Fragment>
  );
};

export default FavBlogs;