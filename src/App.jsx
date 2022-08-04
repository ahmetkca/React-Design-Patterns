import './App.css'

import React, { useState } from 'react'

import { UncontrolledForm } from './UncontrolledForm'
import { ControlledForm } from './ControlledForm'
import { UncontrolledModal } from './UncontrolledModal'
import { ControlledModal } from './ControlledModal'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <div className="App">
      <button onClick={handleToggle}>{ isOpen ? 'Hide Modal' : 'Show Modal' }</button>
      <ControlledModal isOpen={isOpen} onRequestToggle={handleToggle}>
        <h1>Controlled Modal</h1>
        <p>This is a controlled modal.</p>
        <p>You can close it by clicking outside of it.</p>
        <ControlledForm />
      </ControlledModal>
      <hr/>

      <UncontrolledForm />
      <ControlledForm />
      <hr/>
      <UncontrolledModal>
        <h1>Uncontrolled Modal</h1>
        <p>This is a uncontrolled  modal which means no other component can open or close this modal</p>
        <ControlledForm />
      </UncontrolledModal>
    </div>
  )
}

export default App
