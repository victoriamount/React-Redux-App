import React from 'react'
import Styled from 'styled-components'
import Idea from './Idea'

const StyledIdeaSection = Styled.div`
    display: flex;
    width: 49%;
    height: 100vh;
    border: 1px solid green;
    justify-content: center;
    align-items: center;
`

const IdeaSection = () => {
    return (
        <StyledIdeaSection>
            <Idea />
        </StyledIdeaSection>
    )
}

export default IdeaSection
