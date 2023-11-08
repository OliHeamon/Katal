import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import PeptideCalculator from './PeptideCalculator';
import GradeCalculator from './GradeCalculator';

const Main = () => {
  return (
    <Routes> {}
      <Route path='/' Component={HomePage} />
      <Route path='/peptidecalculator' Component={PeptideCalculator} />
      <Route path='/gradecalculator' Component={GradeCalculator} />
    </Routes>
  );
}

export default Main;