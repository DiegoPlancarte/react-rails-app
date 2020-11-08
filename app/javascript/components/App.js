import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopBar from "./shared/Topbar"
import GetBlogs from "./blogs/GetBlogs";
import BlogInfo from "./blogs/BlogInfo";
import CreateBlog from "./blogs/CreateBlog";
import EditBlog from "./blogs/EditBlogs";

class App extends React.Component {
  render () {

    const {
      logged_in,
      current_user,
      sign_in_route,
      sign_out_route,
      sign_up_route,
      edit_account_route
    } = this.props
    return (
      <React.Fragment>
        <Router>
        <TopBar sign_in_route={ sign_in_route } sign_up_route={ sign_up_route } logged_in={ logged_in } sign_out_route={ sign_out_route } edit_account={ edit_account_route } />
        
        <Switch>
          <Route exact path ='/allblogs'> <GetBlogs /> </Route>
          <Route path ='/bloginfo/:id' render={(props) => <BlogInfo {...props} current_user= { current_user }/> }/>
          <Route path="/createblog" render={(props) => <CreateBlog {...props} current_user= { current_user }/> }/>
          <Route path="/editblog/:id" render={(props) => <EditBlog {...props} current_user= { current_user }/> }/>
        </Switch>
      </Router>
      </React.Fragment>
    );
  }
}

export default App
