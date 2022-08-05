import React, { useState } from 'react';

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentStep, setCurrentStep] = useState(0);

    const goToNext = (currentData) => {
        const nextStep = currentStep + 1;

        const updatedOnboardingData = {
            ...onboardingData,
            ...currentData,
        };

        if (nextStep < children.length) {
            console.log(nextStep);
            setCurrentStep(nextStep);
        } else {
            onFinish(onboardingData);
        }

        setCurrentStep(currentStep + 1);

        setOnboardingData(updatedOnboardingData);
    }

    const currentChild = React.Children.toArray(children)[currentStep];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild;
}