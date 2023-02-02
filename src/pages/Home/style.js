import styled from "styled-components";

export const HomeWrapper = styled.div`
  background-color: #87ceeb;
  padding: 50px;

  & .home-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;

    & .home-text {
      font-size: 24px;
      font-weight: 900;
      color: #4169e1;
      width: 40%;
      
    }
  }

  & .home-lower-content {
    font-size: 32px;
    font-weight: 900;
    color: #4169e1;
    display: flex;
    align-items: center;
    flex-direction: column;


    & .pic-holder {
      border: 1px solid #87ceeb;
      padding: 20px;
      width: 60%;
      height: max-content;
      background-color: #9fe2bf;
      border-radius: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
      box-shadow: 5px 10px 18px #111111;

      & img {
        border-radius: 10px;
      }

      & button {
        width: 200px;
        height: 50px;
        border: 1px solid white;
        color: white;
        border-radius: 20px;
        background-color: #87ceeb;
        margin-top: 30px;
        font-size: 24px;
      }
    }
  }
`;
