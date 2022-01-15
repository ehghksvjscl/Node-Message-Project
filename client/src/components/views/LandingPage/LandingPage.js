// eslint-disable-next-line
import React from 'react'
import Tiger from '../../common/Background/Tiger';
import Number from '../../common/Background/Number';
import styled from 'styled-components';
import GoldButton from '../../common/Buttons/GoldButton';
import { useSelector } from "react-redux";
import NavBar from '../NavBar/NavBar';
import { CLIENT_URL } from '../../Config';

const StyledTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    top: 120px;
    margin: 0 auto;
`
const ButtonDiv = styled.div`
    margin-top: 30rem;
`

function LandingPage(props) {

    const user = useSelector(state => state.user)
    const handleStartClick = () => {
        props.history.push('/login')
    }

    const copyToClipboard = (val) => {
        const t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        alert("내 주소가 복사 되었습니다.")
      }

    // 로그인 안했을 경우
    if (user.userData && !user.userData.isAuth) {
        return (
            <>
                <div className="app">
                    <NavBar />
                    <Number />
                    <StyledTitle>새해 복 많이 주세요.</StyledTitle>
                    <Tiger />
                    <ButtonDiv>
                        <GoldButton name="시작하기" onClick={handleStartClick}/>
                    </ButtonDiv>
                </div>
            </>
        )
    } else {
        // 로그인 했을 경우
        return (
            <>
                <div className="app">
                    <NavBar />
                    <Number />
                    <StyledTitle>새해 복 많이 주세요.</StyledTitle>
                    <Tiger />
                    <ButtonDiv>
                        <GoldButton name="내 링크 복사" onClick={() => copyToClipboard(`${CLIENT_URL}/link/${user.userData._id}`)}/>
                    </ButtonDiv>
                </div>
            </>
        )
    }

}

export default LandingPage
