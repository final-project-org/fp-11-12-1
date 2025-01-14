import ACTIONS from '../constants/actionTypes'
import axios from 'axios'

export const fetchAllUsers = async (token) => {
    const res = await axios.get('/api/user/all_infor', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetAllUsers = (res) => {
    return {
        type: ACTIONS.GET_ALL_USERS,
        payload: res.data
    }
}