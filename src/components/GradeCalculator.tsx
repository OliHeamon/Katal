import { Link } from 'react-router-dom';
import './HomePage.css';
import { uniqueID } from '@syncfusion/ej2/base';

const addNewRow = (event: React.MouseEvent<HTMLElement>) => {
  addRow();
}

const addRow = () => {
  var table = document.getElementById('grade-table') as HTMLTableElement;
  var row0 = table.rows[1];

  var newRow = row0.cloneNode(true) as HTMLTableRowElement;
  newRow.id = `${uniqueID()}`;

  var mark = (newRow.children[0] as HTMLTableCellElement).firstChild as HTMLInputElement;
  var credits = (newRow.children[1] as HTMLTableCellElement).firstChild as HTMLInputElement;
  mark.value = "";
  credits.value = "";

  (newRow.children[2] as HTMLButtonElement).onclick = () => addRow();
  (newRow.children[3] as HTMLButtonElement).onclick = () => deleteRow(newRow);

  table.appendChild(newRow);
}

const deleteRow = (target : HTMLTableRowElement) => {
  var table = document.getElementById('grade-table') as HTMLTableElement;

  table.removeChild(target);
}

const calculate = (event: React.MouseEvent<HTMLElement>) => {
  var grade = document.getElementById('grade') as HTMLParagraphElement;
  var creditsIndicator = document.getElementById('credits') as HTMLParagraphElement;
  var classification = document.getElementById('classification') as HTMLParagraphElement;

  var table = document.getElementById('grade-table') as HTMLTableElement;

  var markList = [];
  var creditsList = [];

  var creditsTotal = 0;
  var total = 0;
  var classificationBand = "N/A";

  for (let i = 1; i < table.rows.length; i++) {
    var mark = (table.rows[i].children[0] as HTMLTableCellElement).firstChild as HTMLInputElement;
    var credits = (table.rows[i].children[1] as HTMLTableCellElement).firstChild as HTMLInputElement;

    var markValue = parseInt(mark.value?.trim() ?? "");
    var creditsValue = parseInt(credits.value?.trim() ?? "");

    if (markValue !== 0 && (!Number(markValue) || !Number(creditsValue))) {
      alert("Make sure all inputs are numbers!");
      return;
    }

    markList.push(markValue);
    creditsList.push(creditsValue);

    creditsTotal += creditsValue;
  }

  for (let i = 0; i < markList.length; i++) {
    var markNumber = markList[i];
    var creditsNumber = creditsList[i];

    total += markNumber * (creditsNumber / creditsTotal);
  }

  total /= 10;

  grade.textContent = `Grade: ${total.toFixed(2)}`

  if (total >= 6.85) {
    classificationBand = "1st";
  }
  else if (total >= 5.9) {
    classificationBand = "2:1 (higher 2nd)"
  }
  else if (total >= 4.95) {
    classificationBand = "2:2 (lower 2nd)"
  }
  else if (total >= 4) {
    classificationBand = "3rd"
  }
  else {
    classificationBand = "Fail";
  }

  creditsIndicator.textContent = `Credits: ${creditsTotal}`;
  classification.textContent = `Classification: ${classificationBand}`;
}

const PeptideCalculator = () => {
  return (
    <div>
      <header className='calculator-title'>
        <span>Grade Calculator</span>
      </header>
      <main>
        <div className='description'>
          <p>Input your <b style={{color: 'mediumseagreen'}}>module marks</b> and the <b style={{color: 'mediumseagreen'}}>credits</b> each module is worth, and click <b style={{color: 'mediumseagreen'}}>calculate</b> to determine the overall grade. This will provide a numerical score as well as a projected degree classification. The classification is focused on <b style={{color: 'mediumseagreen'}}>first and second-year</b> grade averages for a BSc, but should be accurate for others too. <b style={{color: 'mediumseagreen'}}>Grades should range from 0-100</b>.</p>
        </div>
        <div>
          <Link to="/" style={{textDecoration: 'none'}}>
            <button className='small-button'><b style={{color: 'mediumseagreen'}}>Back</b></button>
          </Link>
          <p></p>
        </div>
        <div>
          <table id='grade-table' className='grade-table'>
            <tr id='first-row'>
              <td>Mark:</td>
              <td>Credits:</td>
              <td></td>
              <td></td>
            </tr>
            <tr id='second-row'>
              <td><input id='markbox' placeholder='...' type='text' className='big-text-box' style={{width: '175px'}}/></td>
              <td><input id='textbox' placeholder='...' type='text' className='big-text-box' style={{width: '175px'}}/></td>
              <td><button className='small-button' style={{width: '50px'}} onClick={addNewRow}><b style={{color: 'mediumseagreen'}}>+</b></button></td>
              <td><button className='small-button' style={{width: '50px'}}><b style={{color: 'mediumseagreen'}}>X</b></button></td>
            </tr>
          </table>
          <p></p>
          <button className='small-button' onClick={calculate}><b style={{color: 'mediumseagreen'}}>Calculate</b></button>
          <p></p>
          <hr />
          <p id='grade' style={{fontSize: '56px'}}>Grade: 0.00</p>
          <hr />
          <p id='credits' style={{fontSize: '56px'}}>Total Credits: 0</p>
          <hr />
          <p id='classification' style={{fontSize: '56px'}}>Classification: N/A</p>
          <hr />
          <p style={{color: 'mediumseagreen', fontSize: '32pt'}}>Grade Boundaries:</p>
          <p style={{fontSize: '24pt'}}>1st - 6.85 or higher</p>
          <p style={{fontSize: '24pt'}}>2:1 - 5.90 or higher</p>
          <p style={{fontSize: '24pt'}}>2:2 - 4.95 or higher</p>
          <p style={{fontSize: '24pt'}}>3rd - 4.00 or higher</p>
        </div>
      </main>
    </div>
  );
}

export default PeptideCalculator;