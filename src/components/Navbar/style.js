import styled from 'styled-components';

export const NavbarWrapper = styled.div`
& .navbar-wrapper{
    display : flex;
    align-items : center;
    justify-content : space-between;
    border-bottom : 1px solid #87CEEB;
    padding : 16px;

    & .right-content{
        font-size : 20px;
        font-weight : bold;
        color : #111;
        margin-right: 180px;
        display : flex;
        justify-content : space-between;
        gap: 20px;

        & span{
            border: 1px solid white;
            background-color : #90EE90;
            border-radius: 10px;
            padding: 12px 20px;
        }
    }
}`;