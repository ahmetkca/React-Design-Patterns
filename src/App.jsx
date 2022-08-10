import { BigSuccessButton, DangerButton } from './composition'
import { RecursiveComponent } from './RecursiveComponent'

import { DangerButton as PartiallyDangerButton, BigSuccessButton as PartiallyBigSuccessButton } from './partiallyApply';



const nestedObject = {
  a: {
    a1: 1,
    a2: 2,
    a3: 3,
    a4: 4,
    a5: 5,
    a6: 6,
  },
  b: {
    b1: 2,
    b2: {
      b21: 3,
      b22: 4,
      b23: {
        b231: {
          b2311: {
            message: "Really Deep Nesting",
          },
        }
      }
    }
  },
  c: {
    c1: 6,
    c2: {
      c21: 7,
      c22: 8,
      c23: {
        c231: {
          c2311: {
            message: "Hello World",
          },
        }
      }
    }
  }
}


function App() {

  return (
    <div>
      <p>Explicitly creating different types of predefined Buttons</p>
      <DangerButton text="Cancel" onClick={() => {
        setTimeout(() => {
          alert("Cancelled")
        }
        , 1000)
      }}/>
      <BigSuccessButton text="Accept" />
      <hr />
      <p>Creating new types of Buttons by using Higher-Order function (No explicit creation)</p>
      <PartiallyBigSuccessButton text="Accept" />
      <hr />
      <PartiallyDangerButton text="Cancel" onClick={() => {
        setTimeout(() => {
          alert("Cancelled")
        }
        , 1000)
      }
      }/>
      <hr />
      <RecursiveComponent data={nestedObject} />
    </div>
  )
}

export default App
