import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopBar from "./shared/Topbar"
import GetBlogs from "./blogs/GetBlogs";
import Test from "./blogs/Test";
import MyBlogs from "./blogs/MyBlogs";
import FavBlogs from "./blogs/FavBlogs";
import BlogInfo from "./blogs/BlogInfo";
import CreateBlog from "./blogs/CreateBlog";
import EditBlog from "./blogs/EditBlogs";
import GetProjects from "./projects/GetProjects";
import ProjectInfo from "./projects/ProjectInfo";
import CreateProject from "./projects/CreateProject";
import EditProject from "./projects/EditProject";

const App = (props) => {

  const {
    logged_in,
    current_user,
    sign_in_route,
    sign_out_route,
    sign_up_route,
    edit_account_route
  } = props

  return (
    <React.Fragment>
      <Router>
      <TopBar sign_in_route={ sign_in_route } sign_up_route={ sign_up_route } logged_in={ logged_in } sign_out_route={ sign_out_route } edit_account={ edit_account_route } />
      
      <Switch>
      {/* Blog Routes */}
        <Route exact path ='/allblogs'> <GetBlogs /> </Route>
        <Route exact path ='/test'> <Test /> </Route>
        <Route path ='/my_blogs' render={(props) => <MyBlogs {...props} current_user= { current_user } /> }/>
        <Route path ='/fav_blogs' render={(props) => <FavBlogs {...props} current_user= { current_user } /> }/>
        <Route path ='/bloginfo/:id' render={(props) => <BlogInfo {...props} current_user= { current_user }/> }/>
        <Route path="/createblog" render={(props) => <CreateBlog {...props} current_user= { current_user }/> }/>
        <Route path="/editblog/:id" render={(props) => <EditBlog {...props} current_user= { current_user }/> }/>

      {/* Project Routes */}
        <Route exact path ='/allprojects'> <GetProjects /> </Route>
        <Route path ='/projectinfo/:id' render={(props) => <ProjectInfo {...props} current_user= { current_user }/> }/>
        <Route path="/createproject" render={(props) => <CreateProject {...props} current_user= { current_user }/> }/>
        <Route path="/editproject/:id" render={(props) => <EditProject {...props} current_user= { current_user }/> }/>
      </Switch>
    </Router>
    </React.Fragment>
  );
}


export default App
