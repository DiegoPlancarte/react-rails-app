import React, { useState, useEffect } from 'react';

const GetBlogs = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/blogs')
    .then((response)=>{
      if(response.status === 200){
          return(response.json())
        }
      })
      .then((data) => {
        setData(data);
      })
  }, []);

  return (
    <React.Fragment>
      { data.map((v,i) => {
        return(
          <div key={i}>
            <h1>{v.title}</h1>
            <p>{v.body}</p>
          </div>
        )
      })}
    </React.Fragment>
  );
};

export default GetBlogs;