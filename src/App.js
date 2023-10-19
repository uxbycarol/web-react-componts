import React from 'react';
import GlobalStyle from './globalStyled'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar, Footer} from './components/'
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/scrollToTop';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';

function App () {
   return (
      <Router>
         <GlobalStyle />
         <ScrollToTop />
         <Navbar id='nav'/>
         <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' exact component={Services} />
            <Route path='/products' exact component={Products} />
            <Route path='/sign-up' exact component={SignUp} />
         </Switch>
         <Footer />
      </Router>
   )
}

export default App
