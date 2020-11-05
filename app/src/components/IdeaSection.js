import React from 'react'
import Styled from 'styled-components'
import Idea from './Idea'
import { connect } from 'react-redux'
import { fetchActivities } from '../store/actions'

const StyledIdeaSection = Styled.div`
    display: flex;
    width: 49%;
    height: 100vh;
    /* border: 1px solid green; */
    justify-content: center;
    align-items: center;
`

const IdeaSection = (props) => {
    return (
        <>
        {/* Loading */}
        {props.isLoading ? <p>Loading activity... </p> : null}

        {/* Error */}
        {props.error ? <p>{props.error}</p> : null}  
        {/* Success */}
        {props.showActivity
            ? <StyledIdeaSection><Idea /></StyledIdeaSection>
            : null}
        
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        activityData: state.activityData,
        error: state.error,
        showActivity: state.showActivity
    }
}

export default connect(mapStateToProps, { fetchActivities })(IdeaSection)

