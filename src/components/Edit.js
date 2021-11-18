import React, {useState} from 'react'

const Edit = (props) => {
    let emptyPark = { id: props.id, { name: props.park.name, description: props.park.description, image: props.park.image, location: props.park.location, admission_fee: props.park.admission_fee } }
    const [park, setPark] = useState(emptyPark)

    const handleChange = (event) => {
        setPark({ ...park, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(park)
    }

    return (
        <>
            <details>
                <summary>Edit Park</summary>
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
                    <input type="submit" />
                </form>
            </details>
        </>
    )
}

export default Edit
