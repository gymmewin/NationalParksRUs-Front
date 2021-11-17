import React, { useState, useEffect } from 'react'

const Add = (props) => {
    let emptyPark = {} /////***** need to know how Vlad set up model
    const [park, setPark] = useState(emptyPark)

    const handleChange = (event) => {
        setPark({ ...park, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(park)
    }

////////************ need more input fields for each of the properties
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={park.name} onChange={handleChange}/>
                <br />
                <br />
                <input type="submit"/>
            </form>
        </>
    )
}

export default Add
