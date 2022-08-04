import React, { useState, useEffect, useRef } from 'react'

export const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState('')
    const [name, setName] = useState('')
    const [ageInputError, setAgeInputError] = useState('')
    const [age, setAge] = useState('')
    const [hairColor, setHairColor] = useState('#000000')

    const notInitialRender = useRef(false)

    useEffect(() => {
        if (notInitialRender.current) {
            if (name.length < 2) {
                setNameInputError('Name must be at least 2 characters long')
            } else {
                setNameInputError('')
            }
        } else {
            notInitialRender.current = true
        }
    }, [name])

    useEffect(() => {
        if (notInitialRender.current) {
            if (age < 0 || age > 120) {
                setAgeInputError('Age must be between 0 and 120')
            } else {
                setAgeInputError('')
            }
        } else {
            notInitialRender.current = true
        }
    }, [age])

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`
            Name: ${name}
            Age: ${age}
            Hair Color: ${hairColor}`)
        setName('') 
        setAge('')
        setHairColor('#000000')
    }

    return (
        <form style={{ gridRow: 3, gridColumn: 2 }}>
            <h2>Controlled Input</h2>
            <div style={{ marginBottom: "5px"}}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        placeholder="name" />
                </label>
                {nameInputError && <p style={{ color: "red" }}>{nameInputError}</p>}
            </div>
            <div style={{ marginBottom: "5px"}}>
                <label>
                    Age:
                    <input 
                        type="number" 
                        value={age} 
                        onChange={e => setAge(e.target.value)}
                        placeholder="age" />
                </label>
                {ageInputError && <p style={{ color: "red" }}>{ageInputError}</p>}
            </div>
            <div style={{ marginBottom: "5px"}}>
                <label>
                    Hair Color:
                    <input 
                        type="color" 
                        value={hairColor} 
                        onChange={e => setHairColor(e.target.value)}
                        placeholder="color" />
                </label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}
