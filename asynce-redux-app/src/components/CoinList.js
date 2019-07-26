import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCoinData } from '../store/actions';
import Coin from './Coin';

const CoinList = (props) => {

    useEffect(() => {
        props.getCoinData(props.coinData)
    }, [])

    if(!props.coinData) return <p>Loading...</p>
    return(
        <div>
            {props.coinData.map(coin => (
                <Coin coin={coin} key={coin.id} /> 
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        coinData: state.coinData
    }
}

export default connect (mapStateToProps, { getCoinData })(CoinList);