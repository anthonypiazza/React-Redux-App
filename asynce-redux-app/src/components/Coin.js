import React from 'react';
import {
    CoinDiv,
    CoinSymbol,
    CoinData,
    CoinName,
    DataDiv
} from '../StyledComponents';

const Coin = (props) => {

    return(
        <CoinDiv>
            <DataDiv>
                <CoinName>{props.coin.id.charAt(0).toUpperCase()}{props.coin.id.slice(1)}</CoinName>
                <CoinSymbol src={props.coin.image} alt={props.coin.id}/>
                <CoinData>All-Time-High: {props.coin.ath_change_percentage}</CoinData>
                <CoinData>Date of All-Time-High: {props.coin.ath_date}</CoinData>
                <CoinData>Market Capitalization: {props.coin.market_cap}</CoinData>
                <CoinData>Current Price: {props.coin.current_price}</CoinData>
                <CoinData>24 Hour High: {props.coin.high_24h}</CoinData>
                <CoinData>24 Hour Low: {props.coin.low_24h}</CoinData>
                <CoinData>Circulating Supply: {props.coin.circulating_supply}</CoinData>
                <CoinData>Total Supply: {props.coin.total_supply}</CoinData>
                <CoinData>Total Volume: {props.coin.total_volume}</CoinData>
            </DataDiv>
        </CoinDiv>
    )
}

export default Coin;