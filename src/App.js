import React from 'react';
import './App.css';
import { firestore } from "./firebase"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import ComboBox from './components/combobox';


class App extends React.Component {
  
  
  state = {
    task:'',
    user:''
  }


  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addTask = event => {
    event.preventDefault()
  
    firestore.collection("test").add({
      task: this.state.task,
      user: this.state.user,
      createdAt: new Date()
    })
  
    this.setState({ task: "", user: "" })
  }


  render() {
    const {task, user} = this.state;

    return(
      
      <Container maxWidth='md' marginTop='auto' marginBottom='auto'>
        
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Github Push CI
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
        <div className='App'>
           <Paper elevation={3}>
            
        <form onSubmit={this.addTask}>
        <div className='combobox'></div>
        
                <div><ComboBox /><TextField 
                  id="outlined-basic" 
                  label="Task" 
                  variant="outlined" 
                  name='task'
                  onChange={this.updateInput}
                  value={task} /></div>
                
                
          <br />
                <div><TextField 
                  id="outlined-basic" 
                  label="User" 
                  variant="outlined" 
                  name='user'
                  onChange={this.updateInput}
                  value={user} /></div>
          <br />
                    <Button variant="contained" color="primary" type='submit'>Submit</Button>
                </form>
      </Paper>     
        </div>
      </Container>
    )
  }
}

export default App;
