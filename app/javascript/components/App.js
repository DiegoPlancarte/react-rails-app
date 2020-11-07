import React from "react"
import TopBar from "./shared/Topbar"

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
        <TopBar sign_in_route={ sign_in_route } logged_in={ logged_in } sign_out_route={ sign_out_route } edit_account={ edit_account_route } />
      </React.Fragment>
    );
  }
}

export default App
