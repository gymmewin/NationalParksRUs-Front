import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Footer from './components/footer.js'

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

    const openModalButton = (modalId) => {
        let modal = document.getElementById(modalId)
        if (modal.style.display !== 'block') {
            modal.style.display = 'block'
        }
    }

    const closeModalButton = (event, modalId) => {
        event.stopPropagation()
        let modal = document.getElementByClassId(modalId)
        if (modal.style.display !== 'none') {
            modal.style.display = 'none'
        }

    }

    useEffect(() => {
        getParks()
    }, [])


    return (
        <>
            <h1 id="header"> Welcome to National Parks R Us </h1>
            <div className="parks">
                {parks.map((park) => {
                    return (
                        <div className="park" id={`openModal${park.id}`} onClick={() => {openModalButton(`modal${park.id}`)}} key={park.id}>
                            <img src={park.photo} alt={park.description} />
                            <h4>{park.name}</h4>
                            <h5>{park.location}</h5>
                            <div className="modal" id={`modal${park.id}`}>
                                <h2>{park.name}</h2>
                                <img src={park.photo} alt={park.description} />
                                <h3>{park.location}</h3>
                                <h3>{park.description}</h3>
                                <h3>Admission fee:{park.admission_fee}</h3>
                                <Edit handleUpdate={handleUpdate} park={park} />
                                <button id={`closeModal${park.id}`} onClick={closeModalButton}>close</button>
                                <button onClick={handleDelete} value={park.id}>
                                delete park
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <details>
                <summary>Add a Park</summary>
                <Add handleCreate={handleCreate} />

            </details>

            <Footer />
        </>
    )
}

export default App;
