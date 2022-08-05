import './App.css'

import React, { useState } from 'react'

import { UncontrolledForm } from './UncontrolledForm'
import { ControlledForm } from './ControlledForm'
import { UncontrolledModal } from './UncontrolledModal'
import { ControlledModal } from './ControlledModal'
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow'
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow'

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ username: "Flinn "})}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ passcode: 1223334444 })}>Next</button>
  </>
);

const StepOptional = ({ goToNext }) => (
  <>
    <h1>Step Optional</h1>
    <button onClick={() => goToNext({ optional: true })}>Next</button>
  </>
)


const StepThird = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ age: 21 })}>Next</button>
  </>
);


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(!isOpen)

  const [onboardingData, setOnboardingData] = useState({})
  const [currentStep, setCurrentStep] = useState(0)

  const onNext = (currentData) => {
      setOnboardingData({ ...onboardingData, ...currentData })
      setCurrentStep(currentStep + 1)
  }

  return (
    <div className="App">
      <ControlledOnboardingFlow 
        currentStep={currentStep}
        onNext={onNext}
        onFinish={(finishedData => {
          console.log(finishedData)
          alert(`Finished with data: ${JSON.stringify(finishedData)}`);
        })} >
        <StepOne />
        <StepTwo />
        {onboardingData?.passcode === 122333 ? <StepOptional /> : null}
        <StepThird />
      </ControlledOnboardingFlow>


      <UncontrolledOnboardingFlow onFinish={(onboardingData => {
        console.log(onboardingData);
        alert(`Onboarding finished with data: ${JSON.stringify(onboardingData)}`);
      })}>
        <StepOne />
        <StepTwo />
        <StepThird />
      </UncontrolledOnboardingFlow>
      <hr />

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
