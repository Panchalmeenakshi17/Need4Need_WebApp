import axios from 'axios';


export const logNgo = (ngo) => async dispatch => {
    dispatch({type : 'NGO_LOGIN_REQUEST'})
    try {
        const res = await axios.post('/api/ngo/login',ngo);
        dispatch({type : 'NGO_LOGIN_SUCCESS'});
        localStorage.setItem('currentNgo', JSON.stringify(res.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({type : 'NGO_LOGIN_FAIL',payload : error})
    } 
};

export const signNgo = (ngo) => async dispatch => {
    dispatch({type : 'NGO_SIGNUP_REQUEST'})
    try {
        const res = await axios.post('/api/ngo/signup',ngo);
        dispatch({type : 'NGO_SIGNUP_SUCCESS'});
    } catch (error) {
        dispatch({type : 'NGO_SIGNUP_FAIL',payload : error})
    } 
};

export const logoutNgo = () => dispatch => {
    localStorage.removeItem('currentNgo');
    window.location.href = '/';
    alert("you are About to logged Out in!");
};

export const getAllNgos = () => async (dispatch) => {
    dispatch({type : 'GET_NGO_REQUEST'});
    try {
        const res = await axios.get('/api/ngo/getAllNgo');
        dispatch({type : 'GET_NGO_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_NGO_FAIL',payload : err});
    }
  };
  export const admindeleteNgo = (ngoId) => async (dispatch) => {
    try {
        await axios.post('/api/ngo/admindeletengo',{ngoId});
        localStorage.removeItem('currentNgo');
        alert("Ngo Deleted Successfully!","success");
        window.location.href = '/AdminNgoList';
    } catch (error) {
        alert("Error While Deleting Ngo");
    }
};

export const addNgo = (ngo) => async (dispatch) => {
    dispatch({type : 'ADD_NGO_REQUEST'});
    try {
        const res = await axios.post('/api/ngo/addngo',{ngo});
        dispatch({type : 'ADD_NGO_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'ADD_NGO_FAIL',payload : err});
    }
  };

  export const getNgoById = (ngoId) => async (dispatch) => {
    dispatch({type : 'GET_NGOBYID_REQUEST'});
    try {
        const res = await axios.post('/api/ngo/getngobyid',{ngoId});
        dispatch({type : 'GET_NGOBYID_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_NGOBYID_FAIL',payload : err});
    }
};
