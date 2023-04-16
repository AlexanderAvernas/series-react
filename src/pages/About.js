import React, {useState} from 'react'
import { useContext } from 'react'
import DisplayShow from '../components/DisplayShow'
import { UserContext } from '../UserContext/UserContext'
import Form from '../components/Form'

function About() {

    const msg = useContext(UserContext)

    const [savedTvShows, setSavedTvShows] = useState([])
  return (

    <div className='about-container'>

        <Form/>
    </div>
  )
}

export default About
