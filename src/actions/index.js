// import axios from 'axios'
import { FETCH_ALL_LIST, FETCH_LOCATIONS } from '../constants/ActionTypes'
import { GET_ALL_LIST, GET_LOCATIONS } from '../constants/Api'
import { fetchAllList } from '../apis/allList'
import { fetchLocations } from '../apis/locations'

const receiveAllList = allList => ({
    type: FETCH_ALL_LIST,
    payload: {
        city: allList.City,
        distWard: allList.DistWard,
        typeCard: allList.TypeCard,
        typeCardE: allList.TypeCardE
    }
})

export const getAllList = () => dispatch => {

    fetchAllList().then(allList => {
        dispatch(receiveAllList(allList))
    })

    // axios.get(GET_ALL_LIST)
    //     .then(response => response.json())
    //     .then(allList => {
    //         dispatch(receiveAllList(allList))
    //     })
    //     .catch(error => {
    //
    //     })
}

const receiveLocations = locations => ({
    type: FETCH_LOCATIONS,
    payload: locations
})

export const getLocations = (filter) => dispatch => {

    fetchLocations(filter).then(locations => {
        dispatch(receiveLocations(locations))
    })

    // axios.get(GET_LOCATIONS)
    //     .then(response => response.json())
    //     .then(locations => {
    //         dispatch(receiveLocations(locations))
    //     })
    //     .catch(error => {
    //
    //     })
}