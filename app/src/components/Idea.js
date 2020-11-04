import React from 'react'
import { connect } from 'react-redux'
import { fetchActivities } from '../store/actions'
import Styled from 'styled-components'

const StyledActivity = Styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 35vw;
    height: 35vw;
    /* border: 1px solid red; */
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    h2{
        text-align: center;
        color: white;
    }
`

const Idea = (props) => {
    return (
        <StyledActivity className={props.activityData.type} >
                {getActivityIcon(props.activityData.type)}
                <h2>{props.activityData.activity}</h2>
        </StyledActivity>
    )
}

const getActivityIcon = (activity) => {
    switch (activity) {
        case 'education':
            return <span>📚</span>
        case 'recreational':
            return <span>🏈</span>
        case 'diy':
            return <span>🛠</span>
        case 'cooking':
            return <span>🥣</span>
        case 'relaxation':
            return <span>🏖</span>
        case 'music':
            return <span>📻</span>
        case 'busywork':
            return <span>🧹</span>            
        default:
            return <span>😀</span>
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        activityData: state.activityData,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchActivities })(Idea)
