import React from 'react'
import Tiger from '../../common/Background/Tiger';
import Number from '../../common/Background/Number';
import styled from 'styled-components';
import PinkButton from '../../common/Buttons/PinkButton'

const StyledTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    top: 120px;
    margin: 0 auto;
`

function CompletedPage() {
    return (
        <>
            <div className="app">
                <Number />
                <StyledTitle>덕담 전송이 완료되었습니다!</StyledTitle>
                <StyledTitle>호랑이 기운 받는 한 해 되세요</StyledTitle>
                <Tiger />
                <PinkButton name="홈 으로"/>
            </div>
        </>
    )
}

export default CompletedPage