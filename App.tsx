import * as React from 'react';
import Router from './src/navigation/router.navigation';
import {AuthProvider} from './src/contexts/auth.context';

const App = () => {
  return (
    <AuthProvider>   
      <Router />
    </AuthProvider>
  ); 
};

export default App;
