import styled from 'styled-components';

export const CoinDiv = styled.div`
    display: flex;
    margin: 40px 5%;
    background-color: #898989;
    color: white;
    font-size: 1rem;
    z-index: 50;
    align-items: center;
    box-shadow: 0 2px 13px 0 rgba(255, 190, 51, 0.8);
    &:hover{
        transform: scale(1.05);
        cursor: pointer;
    }
`

export const DataDiv = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const CoinName = styled.h1`
    margin: 0px;
    font-size: 1rem;
    padding: 0px 5px;
`

export const CoinSymbol = styled.img`
    height: 34px;
    width: auto;
    padding: 0px 5px;
    border-right: 1px solid white;
`

export const CoinData = styled.h5`
    border-left: 1px solid white;
    border-right: 1px solid white;
    margin: 0px;
    padding: 0px 10px;
`