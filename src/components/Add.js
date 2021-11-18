import React, { useState, useEffect } from 'react'

const Add = (props) => {
    let emptyPark = { name: '', description: '', image: '', location: '', admission_fee: '' }
    const [park, setPark] = useState(emptyPark)

    const handleChange = (event) => {
        setPark({ ...park, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(park)
        setPark({ name: '', description: '', image: '', location: '', admission_fee: '' } )
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={park.name} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" value={park.description} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="image">Image: </label>
                <input type="text" name="image" value={park.image} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="location">Location: </label>
                <input type="text" name="location" value={park.location} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="admission_fee">Admission Fee: </label>
                <input type="text" name="admission_fee" value={park.admission_fee} onChange={handleChange}/>
                <br />
                <br />
                <input type="submit"/>
            </form>
        </>
    )
}

export default Add
