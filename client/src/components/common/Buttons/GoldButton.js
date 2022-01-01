import React from 'react'
import styled from 'styled-components';

const StyledGoldButton = styled.button`
    width: 213px;
    height: 43px;
    border-radius: 30px;
    background-color: #DAB967;
    color: #fff;
    border none;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    line-height: 43px;
    position: absolute;
    bottom: 5%;
    margin: 0 auto;
    z-index: 9;
`

function GoldButton() {
    return (
        <>
            <StyledGoldButton>
                <p>시작하기</p>
            </StyledGoldButton>
        </>
    )
}

export default GoldButton
