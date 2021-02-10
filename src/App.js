import './App.css';
import CharacterCatalogue from './containers/CharacterCatalogue'
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Forgot from './containers/Forgot';

import {useSelector} from 'react-redux';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  const appState=useSelector(state => state.appState);
  if (appState==='login'){
    return(
      <div className="App">
        <Login/>
      </div>
    )
  }else{
    if (appState==='signup'){
      return(
        <div className="App">
        <SignUp/>
      </div>
      )
    }
    else{
      if(appState==='forgot'){
        return (
          <div className="App">
            <Forgot/>
          </div>
        );
      }
      return (
        <div className="App">
          <CharacterCatalogue/>
        </div>
      );
    }
  }
  
}

export default App;
