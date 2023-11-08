import { Link } from 'react-router-dom';
import './HomePage.css';

var aminoacids: { [id: string]: number; } = {}

// Isotopic averages of the masses of all 20 standard residues.
// Due to the peptide bond, each residue is lacking an OH on its C-terminus and an H on its N-terminus, making their masses 18 Da less than standard.
aminoacids["A"] = 71.0788
aminoacids["R"] = 156.1876
aminoacids["N"] = 114.1039
aminoacids["D"] = 115.0886
aminoacids["C"] = 103.1448
aminoacids["E"] = 129.1155
aminoacids["Q"] = 128.1308
aminoacids["G"] = 57.0520
aminoacids["H"] = 137.1412
aminoacids["I"] = 113.1595
aminoacids["L"] = 113.1595
aminoacids["K"] = 128.1742
aminoacids["M"] = 131.1986
aminoacids["F"] = 147.1766
aminoacids["P"] = 97.1167
aminoacids["S"] = 87.0782
aminoacids["T"] = 101.1051
aminoacids["W"] = 186.2133
aminoacids["Y"] = 163.1760
aminoacids["V"] = 99.1326

const handleClear = (event: React.MouseEvent<HTMLElement>) => {
  var input = document.getElementById('textbox') as HTMLInputElement;

  input.value = "";
}

const calculate = (event: React.MouseEvent<HTMLElement>) => {
  var input = document.getElementById('textbox') as HTMLInputElement;

  var text = input.value.trim().toUpperCase();

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

    // This is required to account for the C-terminal OH group (M.W = 17 Da) and the N-terminal proton (M.W = 1 Da).
    finalValue += 18;
  }

  result.textContent = `Molecular Weight: ${finalValue.toFixed(2)} Da`;
}

const PeptideCalculator = () => {
  return (
    <div>
      <header className='calculator-title'>
        <span>Peptide Weight Calculator</span>
      </header>
      <main>
        <div className='description'>
          <p>Determines the <b style={{color: 'mediumseagreen'}}>molecular weight</b> in Daltons (Da) of a given <b style={{color: 'mediumseagreen'}}>polypeptide</b> sequence, where each peptide is in its single letter code format. Only the <b style={{color: 'mediumseagreen'}}>base 20 amino acids</b> are supported, so a sequence using any non-standard residues will not work.</p>
        </div>
        <div>
          <Link to="/" style={{textDecoration: 'none'}}>
            <button className='small-button'><b style={{color: 'mediumseagreen'}}>Back</b></button>
          </Link>
          <p></p>
        </div>
        <div>
          <input id='textbox' type='text' placeholder="Input sequence..." className='big-text-box' />
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