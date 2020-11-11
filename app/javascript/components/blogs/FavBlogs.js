import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import readDataNew from '../utils/readDataNew'

const FavBlogs = (props) => {

  const [ state, error ] = readDataNew("blog", "")
  const [ favs, fav_error ] = readDataNew("favorite_blog", "")

  if (favs === null || state === null ) {
    return <div>Loading...</div>
  }

  const my_info = favs.filter((v,i) => {
    return(v.user_id === props.current_user.id)
  })

  const my_favs = my_info[0].fav_blogs.split(', ').map(x=>+x).sort()

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