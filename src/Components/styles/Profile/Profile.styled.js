import styled from "styled-components";

export const MainProfile = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderProfile = styled.div`
  width: 100vw;
  height: 35vh;
  background: #282c34;
`

export const ContentProfile = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
`

export const RightProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #494949;
    text-align: start;
    margin: 3vh 0 1vh 0;
  }
  
  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #494949;
    text-align: start;
  }
  
  p {
    width: 70%;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #494949;
    text-align: start;
    margin: 5vh 0 5vh 0;
  }
`

export const LeftProfile = styled(RightProfile)`
  margin-top: 4vh;
`

export const ProfileLogo = styled.button`
  background: radial-gradient(circle at 100%, #80B1FF, #81C7EE 10%, #83FFC1 100%, #333 10%);
  border-radius: 300px;
  width: 200px;
  height: 200px;
  margin-right: 1vw;
  margin-top: -13vh;
  border: 2px solid white;
    
`

export const NFTProfile = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const ProfileBanner = styled.div`
  width: 100vw;
  height: 30vh;
  margin-top:150vh;
  z-index: -1;
  display: flex;
  background: linear-gradient(360deg, #FFA4D4 0%, rgba(255, 164, 212, 0.625) 63.02%,
  rgba(255, 164, 212, 0) 100%);    
`