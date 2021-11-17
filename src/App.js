import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Add from './components/Add.js'
import Edit from './components/Edit.js'

const App = () => {
    let [parks, setParks] = useState([])

    const getParks = () => {
        axios
            .get('///insert backend url here///')
            .then(
                (response) => setParks(response.data),
                (err) => console.error(err)
            )
    }

    const handleCreate = (addPark) => {
        axios
            .post('////**** insert backend url here ****/////', addPark)
            .then((response) => {
                console.log(response);
                getParks()
            })
    }

    const handleDelete = (event) => {
        axios
            .delete('///////***** insert backend url here *****???????' + event.target.value)
            .then((response) => {
                getParks()
            })
    }

    const handleUpdate = (editPark) => {
        console.log(editPark); // for debugging purposes
        axios
            .put('////**** insert backend url here ****/////' + editPark.id, editPark)
            .then((response) => {
                getParks()
            })
    }

    useEffect(() => {
        getParks()
    }, [])

///// still need to make card expand in order to show other details about each park, probably using the details and summary tags? also want delete and edit buttons to be hidden from main view
    return (
        <>
            <h1> Welcome to National Parks R Us </h1>
            <div className="parks">
                {parks.map((park) => {
                    return (
                        <div className="park" key={park.id}>
                            <img src={park.photo} alt={park.description} />
                            <h4>{park.name}</h4>
                            <h5>{park.description}</h5>
                            <Edit handleUpdate={handleUpdate} park={park} />
                            <button onClick={handleDelete} value={park.id}>
                            delete park
                            </button>
                        </div>
                    )
                })}
            </div>
            <details>
                <summary>Add a Park</summary>
                <Add handleCreate={handleCreate} />

            </details>
        </>
    )
}

export default App;
