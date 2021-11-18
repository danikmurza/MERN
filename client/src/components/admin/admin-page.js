import React from 'react'
import {connect} from 'react-redux'
import {userAction} from '../../actions'

class AllUser extends React.Component {
  
  // state = {
  //   user: JSON.parse(localStorage.getItem('user').user),
  //   _id:''
  // }
  
  componentDidMount = () => {
    // this.props.dispatch(userAction.myAccount(this.state._id))
  }
  
  
  deleteUser = (e) => {
    this.setState({_id: e.target.value})
    this.props.dispatch(userAction.deleteUser(e.target.value))
    window.location.reload()
  }
  
  Show = () => {
    // this.props.dispatch(userAction.myAccount(this.state._id))
  }
  
  render() {
    const {user} = this.props;
    console.log(user);
    if (user) {
      const listUsers = user.map((users) =>
        <li key={users._id} style={{style: "none"}} className="mb-3">
          {users.email}
          {users.password}
          <button className="btn btn-secondary ml-3 mb-3"
                  value={users._id}
                  onClick={this.deleteUser}>
            Delete
          </button>
          <hr/>
        </li>
      )
      
      return (
        <>
          <h1>Admin page</h1>
          <ul style={{listStyle: "none"}}>
            {listUsers}
          </ul>
        </>
      )
    }
    return (
      <>
        <button onClick={this.Show}>Button</button>
      </>
    )
  }
}


const mapStateToProps = ({authentication: {loggingIn, user}}) => {
  return {loggingIn, user}
};


export default connect(mapStateToProps, null)(AllUser)
