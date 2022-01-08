// eslint-disable-next-line
import React from 'react'
import Tiger from '../../common/Background/Tiger';
import Number from '../../common/Background/Number';
import styled from 'styled-components';
import GoldButton from '../../common/Buttons/GoldButton';

const StyledTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    top: 120px;
    margin: 0 auto;
`

function LandingPage() {
    return (
        <>
            <div className="app">
                <Number />
                <StyledTitle>새해 복 많이 주세요.</StyledTitle>
                <Tiger />
                <GoldButton name="시작하기"/>
            </div>
        </>
    )
}

export default LandingPage
