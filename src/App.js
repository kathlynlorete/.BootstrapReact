import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {
        Button,
        ButtonGroup,
        Form,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock,
        Checkbox,
        Radio,
        Grid,
        Row,
        Col
        } from 'react-bootstrap';

class App extends Component {
  
  state = {
    name:"",
    color:"",
    movies:[],
    gender:""
  };
  
  onChange = (fieldName)=>{
    return(event)=> {
      var state = this.state;
      state[fieldName] = event.target.value;
      this.setState(state);
    }
  };
  
  
  
  
  
  
  
   checkboxChange = (fieldName)=>{
     return (event)=> {
       var targetArray = this.state[fieldName];
       if(targetArray.indexOf(event.target.value) >=0 )
       targetArray.splice(
         targetArray.indexOf(event.target.value),
         1
       );
       else
       targetArray.push(event.target.value);
       var state = this.state;
       state[fieldName]=targetArray;
       this.setState(state);
       
       
     }
   }
   
   
   
   
   
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h2>Student Survey</h2>
        </div>
      
        <p className="jumbotron">
        <Grid>
        <Row>
        
   
        
        
        
          <Col md={6}>
          <Form>
      
      
      
      
      
         {/*----------------------------------------------------------------------------------------------------------------- */}
      
        <FormGroup>
          <ControlLabel>Your name please . . . .</ControlLabel>
          <FormControl type = "text" placeholder = "Enter your name here" value = {this.state.name} onChange = {this.onChange('name')}/>
          <HelpBlock>This is to identify you</HelpBlock>
        </FormGroup>
        
        
        
        
        
         {/*----------------------------------------------------------------------------------------------------------------- */}
        
        <FormGroup>
          <ControlLabel>Choose your favorite color</ControlLabel>
          <FormControl componentClass = "select" 
                       placeholder = "Choose color here"
                       value = {this.state.color} onChange = {this.onChange('color')}>
            <option value = "Red">Red</option>
            <option value = "Green">Green</option>
            <option value = "Blue">Blue</option>
            <option value = "White">White</option>
            <option value = "Black">Black</option>
          </FormControl>
          <HelpBlock>Pick one (ex. Green)</HelpBlock>
        </FormGroup>
       
       
       
         {/*----------------------------------------------------------------------------------------------------------------- */}
        <FormGroup>
          <ControlLabel>Favorite Movies</ControlLabel>
            <Checkbox value = "Harry Potter" checked = {this.state.movies.indexOf('Harry Potter')>=0 ? true:false} onChange = {this.checkboxChange('movies')}>Harry Potter Series</Checkbox>
            <Checkbox value = "Game of Thrones" checked = {this.state.movies.indexOf('Game of Thrones')>=0 ? true:false} onChange = {this.checkboxChange('movies')}>Game Of Thrones</Checkbox>
            <Checkbox value = "Twilight Series" checked = {this.state.movies.indexOf('Twilight Series')>=0 ? true:false} onChange = {this.checkboxChange('movies')}>Twilight Series</Checkbox>
        </FormGroup>
        
        
       
         {/*----------------------------------------------------------------------------------------------------------------- */} 
        
        <FormGroup>
          <ControlLabel>Gender</ControlLabel>
            <Radio name = "gender" value="male" onChange={this.onChange('gender')}>Male</Radio>
            <Radio name = "gender" value="female" onChange={this.onChange('gender')}>Female</Radio>
            <Radio name = "gender">Still confused</Radio>
            <Radio name = "gender">Alien</Radio>
        </FormGroup>
         
         
         {/*----------------------------------------------------------------------------------------------------------------- */}
          <ButtonGroup>
            <Button bsStyle = "info">Info Button
            </Button>
          <Button bsStyle = "primary">Primary Button
          </Button>
          <Button bsStyle = "warning">Warning Button
          </Button>
          <Button bsStyle = "danger">Error Button
          </Button>
          </ButtonGroup>
          </Form>
          </Col>
          
         {/*----------------------------------------------------------------------------------------------------------------- */}
          <Col md={6}>
          Your name is <strong>{this.state.name}</strong><br/><br/>
          Your favorite color is <strong>{this.state.color}</strong><br/><br/>
          Your favorite movies is/are <strong>{
            this.state.movies.map((item,i)=>{
              
              return <div>
              
              <span className="label label-info">
              <span className="glyphicon glyphicon-pencil"></span>
              &nbsp;&nbsp;&nbsp;
               {item}
               
               </span>
              
              </div>
              
              
            })}</strong><br/><br/>
          Your gender <strong>{this.state.gender}</strong>
          </Col>
        </Row>
        
        
        

{/*----------------------------------------------------------------------------------------------------------------- */}
 
{/*----------------------------------------------------------------------------------------------------------------- */}
 
{/*----------------------------------------------------------------------------------------------------------------- */}
        
 <Row>
        
   
        
        
        
          <Col md={6}>
          <Form>
      
      
      
      
      
         {/*----------------------------------------------------------------------------------------------------------------- */}
      
        <FormGroup>
          <ControlLabel>Your address please . . . .</ControlLabel>
          <FormControl type = "text" placeholder = "Enter your address" value = {this.state.address} onChange = {this.onChange('address')}/>
          <HelpBlock>This is to identify your HomeTown</HelpBlock>
        </FormGroup>
        
        
        
        
        
         {/*----------------------------------------------------------------------------------------------------------------- */}
  
       
       
         {/*----------------------------------------------------------------------------------------------------------------- */}
        <FormGroup>
          <ControlLabel>Favorite Movies</ControlLabel>
            <Checkbox value = "Harry Potter" checked = {this.state.movies.indexOf('Harry Potter')>=0 ? true:false} onChange = {this.checkboxChange('movies')}>Harry Potter Series</Checkbox>
            <Checkbox value = "Game of Thrones" checked = {this.state.movies.indexOf('Game of Thrones')>=0 ? true:false} onChange = {this.checkboxChange('movies')}>Game Of Thrones</Checkbox>
            <Checkbox value = "Twilight Series" checked = {this.state.movies.indexOf('Twilight Series')>=0 ? true:false} onChange = {this.checkboxChange('movies')}>Twilight Series</Checkbox>
            <Checkbox value = "Dora" checked = {this.state.movies.indexOf('Dora')>=0 ? true:false} onChange = {this.checkboxChange('movies')}>Dora</Checkbox>
                
        </FormGroup>
        
        
       
         {/*----------------------------------------------------------------------------------------------------------------- */} 
        
        <FormGroup>
          <ControlLabel>status</ControlLabel>
            <Radio name = "status" value="single" onChange={this.onChange('status')}>single</Radio>
            <Radio name = "status" value="taken" onChange={this.onChange('status')}>taken</Radio>
            <Radio name = "status" value="other" onChange={this.onChange('status')}>Other</Radio>
            
        </FormGroup>
         
         
         {/*----------------------------------------------------------------------------------------------------------------- */}
          
          </Form>
          </Col>
          
         {/*----------------------------------------------------------------------------------------------------------------- */}
          <Col md={6}>
          Your address is <strong>{this.state.address}</strong><br/><br/>
          Your favorite color is <strong>{this.state.color}</strong><br/><br/>
          Your favorite movies is/are <strong>{
            this.state.movies.map((item,i)=>{
              
              return <div>
              
              <span className="label label-info">
              <span className="glyphicon glyphicon-pencil"></span>
              &nbsp;&nbsp;&nbsp;
               {item}
               
               </span>
              
              </div>
              
              
            })}</strong><br/><br/>
          Your status <strong>{this.state.status}</strong>
          </Col>
        </Row>
        
        
        
        </Grid>
        
        </p>
      </div>
      
      
      
      
      
      
      
      
  
        

      
      
    );
  }
}





{/*----------------------------------------------------------------------------------------------------------------- */}
          
























export default App;













