import styled from "styled-components";
export const FooterWrapper = styled.div`
background-color: #9FE2BF;
& .footer-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 28px;
    font-weight: bold;
    color: #4169E1;
    padding: 30px; 

    & span{
        text-decoration: underline;
    }
}`;