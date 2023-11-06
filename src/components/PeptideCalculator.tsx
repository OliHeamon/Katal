import { Link } from 'react-router-dom';
import './HomePage.css';

var aminoacids: { [id: string]: number; } = {}

aminoacids["A"] = 89.1
aminoacids["R"] = 174.2
aminoacids["N"] = 132.1
aminoacids["D"] = 133.1
aminoacids["C"] = 121.1
aminoacids["E"] = 147.1
aminoacids["Q"] = 147.1
aminoacids["G"] = 75.0
aminoacids["H"] = 155.1
aminoacids["I"] = 131.2
aminoacids["L"] = 131.2
aminoacids["K"] = 146.2
aminoacids["M"] = 149.2
aminoacids["F"] = 165.2
aminoacids["P"] = 115.1
aminoacids["S"] = 105.1
aminoacids["T"] = 119.1
aminoacids["W"] = 204.2
aminoacids["Y"] = 181.2
aminoacids["V"] = 117.1

const handleClear = (event: React.MouseEvent<HTMLElement>) => {
  var input = document.getElementById('textbox') as HTMLInputElement;

  input.value = "";
}

const calculate = (event: React.MouseEvent<HTMLElement>) => {
  var input = document.getElementById('textbox') as HTMLInputElement;

  var text = input.value.trim();

  var result = document.getElementById('results') as HTMLParagraphElement;

  var finalValue = 0;

  if (text != "") {
    var characters = text.split("");

    for (let i = 0; i < characters.length; i++) {
      var weight = aminoacids[characters[i]];

      if (weight == undefined) {
        result.textContent = `Invalid sequence!`;
        return;
      }

      finalValue += aminoacids[characters[i]];
    }
  }

  result.textContent = `Molecular Weight: ${finalValue.toFixed(2)} Da`;
}

const PeptideCalculator = () => {
  return (
    <div>
      <header className='calculator-title'>
        <span style={{fontSize: '56pt'}}><b style={{color: 'mediumseagreen'}}>Peptide</b> Weight Calculator</span>
      </header>
      <main>
        <div className='description'>
          <p><b style={{color: 'mediumseagreen'}}>----------------------------------------</b></p>
          <p>Determines the molecular weight in Daltons of a given polypeptide sequence, where each polypeptide is in its single letter code format.</p>
        </div>
        <div>
          <Link to="/" style={{textDecoration: 'none'}}>
            <button className='small-button'><b style={{color: 'mediumseagreen'}}>Back</b></button>
          </Link>
          <p></p>
        </div>
        <div>
          <input id='textbox' type='text' placeholder="Input sequence..." className='text-box' />
          <p></p>
          <button className='small-button' onClick={handleClear}><b style={{color: 'mediumseagreen'}}>Clear</b></button>
          <span>    </span>
          <button className='small-button' onClick={calculate}><b style={{color: 'mediumseagreen'}}>Calculate</b></button>
          <p id='results' style={{fontSize: '56px'}}>Molecular Weight: 0 Da</p>
        </div>
      </main>
    </div>
  );
}

export default PeptideCalculator;