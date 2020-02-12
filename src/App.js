import React from 'react';
import './App.css';
import BaseRouter from './routes'
import {BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import CustomLayout from './containers/layout'
import * as actions from './store/actions/auth'

class App extends React.Component {

  componentDidMount(){
    this.props.onTryAutoSignup()
  }


  render(){
    return (
      <div >
      <Router>
          <CustomLayout {...this.props}>
            <BaseRouter />
          </CustomLayout>
        </Router>
        </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignup: ()=> dispatch(actions.authCheckState())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
