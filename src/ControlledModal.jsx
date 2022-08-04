import React from 'react'

import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 1;
    overflow: auto;
`;

const ModalBody = styled.div`
    background-color: #d0d0d0;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 0 20px #000;
    z-index: 2;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
    overflow: auto;
`;

export const ControlledModal = ({ isOpen, onRequestToggle, children }) => {
    return (
        <>
            {
                isOpen ? (
                    <ModalBackground onClick={onRequestToggle}>
                        <ModalBody onClick={e => e.stopPropagation()}>
                            <button onClick={onRequestToggle}>{ isOpen ? 'Hide Modal' : 'Show Modal'}</button>
                            {children}
                        </ModalBody>
                    </ModalBackground>
                ) : null
            }
        </>
    )
}


