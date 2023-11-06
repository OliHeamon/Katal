import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import PeptideCalculator from './PeptideCalculator';

const Main = () => {
  return (
    <Routes> {}
      <Route path='/' Component={HomePage} />
      <Route path='/peptidecalculator' Component={PeptideCalculator} />
    </Routes>
  );
}

export default Main;