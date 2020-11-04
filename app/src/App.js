import logo from './logo.svg';
import './App.css';
import Styled from 'styled-components'

import Header from './components/Header'
import IdeaSection from './components/IdeaSection'

const StyledApp = Styled.div`
  display: flex;
`

function App() {
  return (
    <StyledApp className='container' >
      <Header />
      <IdeaSection />
    </StyledApp>
  );
}

export default App;
