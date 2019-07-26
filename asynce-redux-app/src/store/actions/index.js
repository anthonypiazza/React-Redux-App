import axios from 'axios';

export const GET_COIN_DATA_START = 'GET_COIN_DATA_START';
export const GET_COIN_DATA_SUCCESS = 'GET_COIN_DATA_SUCCESS';
export const GET_COIN_DATA_FAIL = 'GET_COIN_DATA_FAIL';


export const getCoinData = () => dispatch => {
    dispatch({ type: GET_COIN_DATA_START})
    axios  
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
        .then(res => {
            dispatch({ type: GET_COIN_DATA_SUCCESS, payload: res.data})
            console.log('YAYYY SUCESSFUL GET', res.data)
        })
        .catch(err => {
            dispatch({ type: GET_COIN_DATA_FAIL, payload: err.response})
            console.log('Booooo No WOrkie', err.response)
        })
}