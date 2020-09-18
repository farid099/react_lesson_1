import React ,{ Component } from 'react';
import './App.css';
import LoginTask from './component/LoginTask';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"farid",
      password:"baba099",
      isLogged:false,
      uName:"",
      uPassword:""
    };
  }

   changeUsernameHandler=(e)=>{
     this.setState({
       uName:e.target.value
     })

   }

   changePasswordHandler= (e) =>{
    this.setState({
      uPassword:e.target.value
    })   }


      checkIstrue = () =>{
         if(this.state.uName == this.state.username && this.state.uPassword == this.state.password){
          alert("successful");

           this.setState({
             isLogged:true
           })
         }else{
           alert("wrong email or password")
         }
      }

      logOut = () =>{
        this.setState({
          isLogged:false
        })
      }

   

  render(){
  return (
    <div className="App">
      <LoginTask 
      username={this.state.username}
      password={this.state.password}
      changeUsernameHandler={this.changeUsernameHandler}
      changePasswordHandler={this.changePasswordHandler}
      checkIsTrue={this.checkIstrue}
      logOut={this.logOut}
      isLogged={this.state.isLogged}>
      </LoginTask>
    </div>
  );
}
}

export default App;
