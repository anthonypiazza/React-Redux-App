import styled from 'styled-components';

export const CoinDiv = styled.div`
    display: flex;
    margin: 40px;
    background-color: white;
    color: #282c34;
    font-size: 1rem;
    z-index: 50;
    align-items: center;
    box-shadow: 0 2px 13px 0 rgba(250,250,250, 0.8);
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
    border-right: 1px solid #282c34;
`

export const CoinData = styled.h5`
    border-left: 1px solid #282c34;
    border-right: 1px solid #282c34;
    margin: 0px;
`