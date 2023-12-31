import { Link } from 'react-router-dom';
import './HomePage.css';
import logo from './k.png';

const HomePage = () => {
  return (
    <div>
      <header className='main-header'>
        <div style={{height: '202px', backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', verticalAlign: 'middle' }}>
          <span style={{position: 'relative', left: '140px', top: '36px'}}><b>atal</b> | Biochemistry</span>
        </div>
      </header>
      <main>
        <div className='description'>
          <br></br>
          <p><b style={{color: 'mediumseagreen'}}>Katal</b> aims to be a multi-use site for a variety of biochemistry related calculations, such as <b style={{color: 'mediumseagreen'}}>buffer and dilution amounts</b>, <b style={{color: 'mediumseagreen'}}>grade calculators</b> and more. Select one of the tools shown to bring up its page. If you have an idea for a new feature, please email it to me at <b style={{color: 'mediumseagreen'}}>bs22oh2@leeds.ac.uk</b>.</p>
          <br></br>
        </div>
        <div>
          <Link to="/peptidecalculator" style={{textDecoration: 'none'}}>
            <button className='button'><b style={{color: 'mediumseagreen'}}>Peptide Weight</b> Calculator</button>
          </Link>
          <br></br>
          <Link to="/gradecalculator" style={{textDecoration: 'none'}}>
            <button className='button'><b style={{color: 'mediumseagreen'}}>BSc Grade</b> Calculator</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;