import React, { useState } from 'react'
import Home from './component/Home'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SimpleC from './component/level/SimpleC'
import MediumC from './component/level/MediumC';
import HardC from './component/level/HardC';
import Navbar from './component/layout/Navbar'
import { createContext } from 'react'
import PlayListTable from './component/PlayListTable'

export const userContext = createContext();

const App = () => {
  const [name, setName] = useState();
  const [playlist, setPlaylist] = useState([]);

  return (
    <>
      <userContext.Provider value={{ name, setName, playlist, setPlaylist }}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>

            <Switch>
              <Route exact path='/' component={Home} />
              <div>
                <Navbar />
                <Route exact path='/simple' component={SimpleC} />
                <Route exact path='/medium' component={MediumC} />
                <Route exact path='/hard' component={HardC} />
                <Route exact path='/playlist' component={PlayListTable} />
              </div>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </userContext.Provider>
    </>
  );
}

export default App;
