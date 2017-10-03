import React from "react";
import Header from './components/Header';
import User from './components/User';
import UserForm from './components/UserForm';

export default class C3 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.addUser = this.addUser.bind(this);

    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        },
        {
          id: 50,
          first_name: "Anish",
          last_name: "Patel",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        },
        {
          id: 10,
          first_name: "Jack",
          last_name: "Bravo",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        },
        {
          id: 12,
          first_name: "Ahmed",
          last_name: "Ali Khan",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  componentDidMount() {}

  addUser(newUser) {  console.log("new user"+JSON.stringify(newUser))
    // // phase 2 implement
    // this.setState({
    //   users: [...this.state.users, newUser]
    // });
  }

  deleteUser(id){

  }


  render() {
    return (
      <main className="c3__main">
        <Header />
        <div className="c3__container">
          { this.state.users.map((user)=>
            <User
              key={user.id}
              user={user}
              onClick={this.deleteUser}
              
            /> 
          )}
        </div>
        <UserForm 
          addUser={this.addUser}
        />
      </main>
    );
  }
}
