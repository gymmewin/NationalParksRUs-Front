
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './App.css'
import Footer from './components/footer.js'


import Add from './components/Add.js'
import Edit from './components/Edit.js'

const backend_url_prefix = "https://natl-parks-r-us-back.herokuapp.com/api"
// const backend_url_prefix = "http://localhost:8000/api"
const matchEverythingRegex = /.*/gi

const App = () => {
    const mapContainerRef = useRef(null);
    const [parks, setParks] = useState([])
    const [attractions, setAttractions] = useState([])
    const [parksFilter, setParksFilter] = useState(matchEverythingRegex)

    const getParks = () => {
        axios
            .get(backend_url_prefix + '/national-parks')
            .then(
                (response) => setParks(response.data),
                (error) => console.error(error)
            )
            .catch((error)=> console.error(error))
    }

    const getAttractions = () => {
        axios
            .get(backend_url_prefix + '/attractions')
            .then(
                (response) => setAttractions(response.data),
                (error) => console.error(error)
            )
            .catch((error) => console.error(error))
    }

    const handleCreate = (addPark) => {
        axios
            .post(backend_url_prefix + '/national-parks', addPark)
            .then((response) => {
                console.log(response);
                getParks()
            })
    }

    const handleDelete = (event) => {
        axios
            .delete(backend_url_prefix + '/national-parks/' + event.target.value)
            .then((response) => {
                getParks()
            })
    }

    const handleUpdate = (editPark) => {
        console.log(editPark); // for debugging purposes
        axios
            .put(backend_url_prefix + '/national-parks/' + editPark.id, editPark)
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
        getParks();
        getAttractions();
    }, [])

    const googleMapsUrlPrefix = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDvlDMBryBUSRxUdnQ4k5wT0uH3bbY7ZHI&q="

    const onFilterChange = (currFilterValue) => {
        setParksFilter(currFilterValue === ''
            ? matchEverythingRegex
            : new RegExp(`.*${currFilterValue}.*`, 'gi'));
    }

    const filterParksByName = (parkName, parksFilter) => {
        return parkName.match(parksFilter);
    }

    return (
        <>
            <h1 id="header"> Welcome to National Parks R Us </h1>
            <h2 id="subhead"> Top 10 National Parks </h2>
            <input
                onChange={(e) => onFilterChange(e.target.value)}
                placeholder="Start typing your desired park's name...">
            </input>
            <div className="parks">
                {parks
                    .filter((park) => filterParksByName(park.name, parksFilter))
                    .map((park) => {
                        return (
                            <div className="park" id={`openModal${park.id}`} onClick={() => {openModalButton(`modal${park.id}`)}} key={park.id}>
                                <img className="img" src={park.image} />
                                <h4>{park.name}</h4>
                                <div className="modal" id={`modal${park.id}`}>
                                    <h2>{park.name}</h2>
                                    <img src={park.image} id="modalimg" />
                                    <h3>{park.location}</h3>
                                    <iframe
                                      // width="450"
                                      // height="250"
                                      // frameBorder="0"
                                      style={{ border:0 }}
                                      src={googleMapsUrlPrefix + park.name}
                                    >
                                    </iframe>
                                    <h3>{park.description}</h3>
                                    <h3>Admission fee: ${park.admission_fee}</h3>
                                    <ul>
                                    Top Attractions:
                                        {
                                            attractions
                                                .filter((attraction) => attraction.park === park.id)
                                                .map((attraction) => {
                                                    return (
                                                        <li>{attraction.name}</li>
                                                    )
                                                })
                                        }
                                    </ul>
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
