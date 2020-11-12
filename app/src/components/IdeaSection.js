import React from 'react'
import Styled from 'styled-components'
import Idea from './Idea'
import { connect } from 'react-redux'
import { fetchActivities } from '../store/actions'

const StyledIdeaSection = Styled.div`
    display: flex;
    width: 60%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const IdeaSection = (props) => {
    return (
        <StyledIdeaSection><Idea /></StyledIdeaSection>
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

