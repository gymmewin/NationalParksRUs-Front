import React, {useState} from 'react'

const Edit = (props) => {
    let emptyPark = { id: props.id, } /////***** need to know how Vlad set up model, use props
    const [park, setPark] = useState(emptyPark)

    const handleChange = (event) => {
        setPark({ ...park, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(park)
    }

////**** need to add more fields *****/////
    return (
        <>
            <details>
                <summary>Edit Park</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={park.name}
                        onChange={handleChange}
                        />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </details>
        </>
    )
}

export default Edit
