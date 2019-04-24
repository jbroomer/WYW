import React from 'react';
import { Link } from 'react-router';
import {Table, Form, Row, Col, Carousel, CarouselItem, Card, FormGroup, FormControl, FormRow, ControlLabel, Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

class Description extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>This is a placeholder for a description of the webapp.</div>
    )
  }
}

class CarouselTest extends React.Component {
  render() {
    return(
      <div style={{textAlign: "center"}}>
        <Carousel>
          <CarouselItem>
            <div style={{textAlign: "center"}}>
              <img src = "/fitness.jpg" height = "600px" width = "800px" />
            </div>
            <Carousel.Caption>
              <h3>Fitness Tracker</h3>
              <p>Calculate how many calories to burn per day!</p>
            </Carousel.Caption>
          </CarouselItem>

          <CarouselItem>
            <div style={{textAlign: "center"}}>
             <img src = "/meals.jpg" height = "600px" width = "800px" />
            </div>
            <Carousel.Caption>
              <h3>Meal Tracking</h3>
              <p>See the nutritional value of your daily diet!</p>
            </Carousel.Caption>
          </CarouselItem>

          <CarouselItem>
            <div style={{textAlign: "center"}}>
             <img src = "/reviews.jpg" height = "600px" width = "800px" />
            </div>
            <Carousel.Caption>
              <h3>Reviews</h3>
              <p>See what our customers think about WYW!</p>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
      </div>
    )
  }
}

// class AddLogIn extends React.Component {
//   constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
  
//       handleSubmit(e) {
//         e.preventDefault();
//         var form = document.forms.updateLogIn;
//         this.props.update();
//         this.props.createIssue({
//           username: form.username.value,
//           password: form.password.value,
//         });
//         // clear the form for the next input
//         form.username.value = ""; form.password.value = "";
//       }
  
//       render() {
//         return (
        
//           <div style={{textAlign: "center"}}>
//             <form name="updateLogin" onSubmit={this.handleSubmit}>
//               <input type="text" name="username" placeholder="Username" />
//               <input type="text" name="password" placeholder="Password" />
//               <button>Log In</button>
//             </form>
//           </div>
//         )
//       }
// }

// class LoggedIn extends React.Component {
//   constructor() {
//     super();
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(){
//     this.props.update();
//   }

//   render(){
//     return(
//       <div style={{textAlign: "center"}}>
//         <p>You are logged in!</p>
//         <input type="button" value="Log Out" onClick={this.handleClick}></input>
//       </div>
//     )
//   }
// }

class TitleTest extends React.Component {
  render() {
      const textStyle = {textAlign: "center"};
      return(
        <div style = {{justifyContent: 'center', alignItems: 'center', textAlign: "center"}}>
          <img src = "/assets/Ftracker_asset.png" height = "200px" width = "500px" style={{paddingTop: "20"}}/>
          <h1 style={{padding: 20, textAlign: "center"}}>Welcome to WYW (Watch Your Weight)</h1>
        </div>
      )
  }
}

class ButtonTable extends React.Component {
  render() {
      const borderedStyle = {padding: 6};
      return (
        // <div style={{textAlign: "center"}}>
        //       <button>Meals</button>
        //       {' '}
        //       <button>Nutrition Tracker</button>
        //       {' '}
        //       <button>My Account</button>
        //       {' '}
        //       <button>History</button>
        // </div>
        <div style={{textAlign: "center"}}>
            <ButtonGroup>
              <Link to='/FitnessTracker'> <Button variant="secondary">Fitness Tracker</Button> </Link>
            </ButtonGroup>
            {' '}
            <ButtonGroup>
              <Link to='/meals'> <Button variant="secondary">Meals</Button> </Link>
            </ButtonGroup>
            {' '}
            <ButtonGroup>
              <Link to='/review'> <Button variant="secondary">Reviews</Button> </Link>
            </ButtonGroup>
        </div>
      )
    }
}

class HomePage extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    isLoggedIn: false
  };

  this.update = this.update.bind(this);
}

update() {
  this.setState({isLoggedIn: !this.state.isLoggedIn});
}

render() {
  const isLoggedIn = this.state.isLoggedIn;
  let logIn;

  if(isLoggedIn){
    logIn = <div style={{textAlign: "center"}}>
             <p>You are logged in!</p>
             <input type="button" value="Log Out" onClick={this.update}></input>
           </div>
  }
  else{
    logIn = <div style={{textAlign: "center"}}>
          {/* <form name="updateLogin" onSubmit={this.update}>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <Link to='/FitnessTracker'><button>Log In</button> </Link>
          </form> */}
          <Form>
            {/* <FormRow>
              <FormGroup as={Col}>
                <ControlLabel>Username</ControlLabel>
                <FormControl type="username" placeholder="Username" />
              </FormGroup>

              <FormGroup as={Col}>
                <ControlLabel>Password</ControlLabel>
                <FormControl type="password" placeholder="Password" />
              </FormGroup>
            </FormRow> */}

            <Row className="justify-content-md-center">
              <Col md="auto">
                <FormControl type="username" placeholder="Username" />
              </Col>
              <Col md="auto">
                <FormControl type="password" placeholder="Password" />
              </Col>
              <Col md="auto">
              <Link to='/FitnessTracker'> <Button variant="secondary" type="submit">Submit</Button> </Link>
              </Col>
            </Row>

            
          </Form>
    </div>
  }

  return (
    <div>
      <TitleTest />
      <hr />
      {logIn}
      <hr />
      <CarouselTest />
      <hr />
      <Description />
      <hr/>
      <ButtonTable />
      <hr/>
    </div>
  );
}
}