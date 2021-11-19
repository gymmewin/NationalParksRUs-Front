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
            .get('https://natl-parks-r-us-back.herokuapp.com/api/national-parks')
            .then(
                (response) => setParks(response.data),
                (error) => console.error(error)
            )
            .catch((error)=> console.error(error))
    }

    const handleCreate = (addPark) => {
        axios
            .post('https://natl-parks-r-us-back.herokuapp.com/api/national-parks', addPark)
            .then((response) => {
                console.log(response);
                getParks()
            })
    }

    const handleDelete = (event) => {
        axios
            .delete('https://natl-parks-r-us-back.herokuapp.com/api/national-parks/' + event.target.value)
            .then((response) => {
                getParks()
            })
    }

    const handleUpdate = (editPark) => {
        console.log(editPark); // for debugging purposes
        axios
            .put('https://natl-parks-r-us-back.herokuapp.com/api/national-parks/' + editPark.id, editPark)
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

    const closeModalButton = (event) => {
        event.stopPropagation()
        let modal = document.getElementsByClassName('modal')
        for (let i=0; i < modal.length; i++){
           modal[i].style.display = "none"
        }
    }

    useEffect(() => {
        getParks()
    }, [])


    return (
        <>
            <h1 id="header"> Welcome to National Parks R Us </h1>
            <h2 id="subhead"> Top 10 National Parks </h2>
            <div className="parks">
                {parks.map((park) => {
                    return (
                        <div className="park" id={`openModal${park.id}`} onClick={() => {openModalButton(`modal${park.id}`)}} key={park.id}>
                            <img className="img" src={park.image} />
                            <h4>{park.name}</h4>
                            <div className="modal" id={`modal${park.id}`}>
                                <h2>{park.name}</h2>
                                <img src={park.image} id="modalimg" />
                                <h3>{park.location}</h3>
                                <h3>{park.description}</h3>
                                <h3>Admission fee: ${park.admission_fee}</h3>
                                <Edit handleUpdate={handleUpdate} park={park} />
                                <button id="closeModal" onClick={closeModalButton}>close</button>
                                <button onClick={handleDelete} value={park.id} id="delete">
                                delete park
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <details>
                <summary className="add">Add a Park</summary>
                <Add handleCreate={handleCreate} />

            </details>

            <Footer />
        </>
    )
}

export default App;
