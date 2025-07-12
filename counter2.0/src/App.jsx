import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function PrimeCheck(num) {
    let factor =0;

 
    for (let i = 1; i <= num; i++) {
     
      if (num % i == 0) {

        factor ++;

      }
    }

     if (factor == 2) {
    return true;
  } else {
    return false;
  }


  }

 
  return (
    <div>
      <div>
        <button
          disabled={counter == 0}
          data-testid="minusonebtn"
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
        <button
          data-testid="plusonebtn"
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
        <div>
          <button data-testid="resetbtn" onClick={() => setCounter(0)}>
            Reset Count
          </button>
        </div>
      </div>
      <span data-testid="counter">{counter}</span>
      <div>
        <span data-testid="odd-or-even">
          The Number is :{counter % 2 == 0 ? "Even" : "Odd"}
        </span>
        <br />
        <span data-testid="is-prime">
          Prime:{PrimeCheck(counter) ? "True" : "False"}
        </span>
      </div>
    </div>
  );
}

export default App;
