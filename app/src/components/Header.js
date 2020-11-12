import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import '../App.css'
import { connect } from 'react-redux'
import { fetchActivities } from '../store/actions'

const StyledHeaderSection = Styled.header`
    display: flex;
    flex-flow: column nowrap;
    width: 40%;
    height: 100vh;
    align-items: center;
    justify-content: space-around;
    color: white;
    background-color: black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    button {
        width: 50%;
        border: none;
        text-decoration: none;
        color: #ffffff;
        padding: 2%;
        cursor: pointer;
        text-align: center;
        transition: background 250ms ease-in-out, 
                    transform 150ms ease;
        border-radius: 50px;
        &:hover, &:focus{
            filter: brightness(0.90);
        }
    }
`

const Header = (props) => {
    const { fetchActivities } = props

    const [clicked, setClicked] = useState('')

    useEffect(() => {
        console.log(clicked)
        fetchActivities(clicked)
    }, [clicked, fetchActivities])

    return (
        <StyledHeaderSection>
            <h1>BORED?</h1>
            <h3>Find an activity ↓</h3>
            <button onClick={() => {setClicked('education')}} className='education'>Education</button>
            <button onClick={() => {setClicked('recreational')}}className='recreational'>Recreational</button>
            <button onClick={() => {setClicked('diy')}}className='diy'>DIY</button>
            <button onClick={() => {setClicked('cooking')}}className='cooking'>Cooking</button>
            <button onClick={() => {setClicked('relaxation')}}className='relaxation'>Relaxation</button>
            <button onClick={() => {setClicked('music')}}className='music'>Music</button>
            <button onClick={() => {setClicked('busywork')}}className='busywork'>Busy Work</button>
            <button onClick={() => {setClicked('charity')}}className='charity'>Charity</button>
            <button onClick={() => {setClicked('social')}}className='social'>Social</button>
        </StyledHeaderSection>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        activityData: state.activityData,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchActivities })(Header)
