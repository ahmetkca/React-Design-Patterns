import React, { useState } from 'react';

export const ControlledOnboardingFlow = ({ children, onFinish, currentStep, onNext }) => {

    const goToNext = (currentData) => {
        onNext(currentData);
    }

    const currentChild = React.Children.toArray(children)[currentStep];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild;
}