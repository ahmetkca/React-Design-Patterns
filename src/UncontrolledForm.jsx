import React from 'react'

export const UncontrolledForm = () => {

    const nameInput = React.createRef()
    const ageInput = React.createRef()
    const hairColorInput = React.createRef()

    const handleSubmit =    (e) => {
        e.preventDefault()
        console.log(nameInput.current.value)
        console.log(ageInput.current.value)
        console.log(hairColorInput.current.value)
        alert(`
            Name: ${nameInput.current.value}
            Age: ${ageInput.current.value}
            Hair Color: ${hairColorInput.current.value}`)
        nameInput.current.value = ''
        ageInput.current.value = ''
        hairColorInput.current.value = '#000000'
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input ref={nameInput} type="text" name="name" placeholder='name'/>
            </label>
            <label>
                Age:
                <input ref={ageInput} type="number" name="age" placeholder='age'/>
            </label>
            <label>
                Hair Color:
                <input ref={hairColorInput} type="color" name="color" placeholder='hair color'/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}