import { loginStart, loginSuccess, loginFailure } from './userRedux'
import axios from 'axios';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('/auth/login', user);
        const payload = res.data;
        dispatch(loginSuccess(payload));
    } catch(err) {
        dispatch(loginFailure());
    }
}