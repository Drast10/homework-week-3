import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import  HomeComputerModel  from './components/HomeComputerModel';


class App extends React.Component {
  
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
         <HomeComputerModel/>
        </header>
      </div>
      </Provider>
    );
  }
  
}

export default App;
