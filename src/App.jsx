import { RecursiveComponent } from './RecursiveComponent'



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
    <RecursiveComponent data={nestedObject} />
  )
}

export default App
