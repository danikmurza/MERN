import React from 'react'
import {connect} from 'react-redux'
import {userAction} from '../../actions'

class AllUser extends React.Component {
  constructor(props) {
    super(props);
    
    this.componentDidMount = () => {
      this.props.dispatch(userAction.getAll())
    }
  }
  
  render() {
    return (
      <div>
        <h1>Admin page</h1>
      </div>
    )
  }
}


const mapStateToProps = ({authentication: {loggingIn, user}}) => {
  return {loggingIn, user}
};


export default connect(mapStateToProps, null)(AllUser)
