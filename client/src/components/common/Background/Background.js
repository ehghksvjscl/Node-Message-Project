import React from 'react'
import BackgroundImg from "../../../assets/background.png"
import styled from 'styled-components';
import LandingPage from '../../views/LandingPage/LandingPage';

const StyledBackGround = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${BackgroundImg});
    background-size: cover;
`




function Background() {
    return (
      <>
        <StyledBackGround>
            <LandingPage />
        </StyledBackGround>
      </>
    )
}

export default Background
