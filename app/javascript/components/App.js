import React from "react"
import TopBar from "./shared/Topbar"

class App extends React.Component {
  render () {

    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user,
      sign_up_route
    } = this.props
    return (
      <React.Fragment>
        <TopBar sign_in_route={ sign_in_route } logged_in={ logged_in } sign_out_route={ sign_out_route } />
      </React.Fragment>
    );
  }
}

export default App
