import axios from 'axios';
export const loginDonator = (donator) => async dispatch => {
    dispatch({type : 'DONATOR_LOGIN_REQUEST'})
    try {
        const res = await axios.post('/api/donator/login',donator);
        dispatch({type : 'DONATOR_LOGIN_SUCCESS',payload : res.data});
        localStorage.setItem('currentDonator', JSON.stringify(res.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({type : 'DONATOR_LOGIN_FAIL',payload : error})
    }
};

export const signupDonator = (donator) => async dispatch => {
    dispatch({type : 'DONATOR_SIGNUP_REQUEST'})
    try {
        const res = await axios.post('/api/donator/signup',donator);
        dispatch({type : 'DONATOR_SIGNUP_SUCCESS'});
    } catch (error) {
        dispatch({type : 'DONATOR_SIGNUP_FAIL',payload : error})
    }
};


export const logoutDonator = () => dispatch => {
    localStorage.removeItem('currentDonator');
    alert("you are About to logged Out in!");
    window.location.href = '/';
};


export const addDonator = (donator) => async (dispatch) => {
    dispatch({type : 'ADD_DONATOR_REQUEST'});
    try {
        const res = await axios.post('/api/donator/adddonator',{donator});
        dispatch({type : 'ADD_DONATOR_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'ADD_DONATOR_FAIL',payload : err});
    }
  };
export const admindeleteDonator = (donatorId) => async (dispatch) => {
    try {
        await axios.post('/api/donator/admindeletedonator',{donatorId});
        localStorage.removeItem('currentDonator');
        alert("Donator Deleted Successfully!","success");
        window.location.href = '/DonatorsList';
    } catch (error) {
        alert("Error While Deleting Donator");
    }
};

export const getAllDonators = () => async (dispatch) => {
    dispatch({type : 'GET_DONATOR_REQUEST'});
    try {
        const res = await axios.get('/api/donator/getAllDonator');
        dispatch({type : 'GET_DONATOR_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_DONATOR_FAIL',payload : err});
    }
  };

  export const getDonatorById = (donatorId) => async (dispatch) => {
    dispatch({type : 'GET_DONATORBYID_REQUEST'});
    try {
        const res = await axios.post('/api/donator/getdonatorbyid',{donatorId});
        dispatch({type : 'GET_DONATORBYID_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_DONATORBYID_FAIL',payload : err});
    }
};

export const updateDonator= (updatedDonator) => async (dispatch) => {
    dispatch({type : 'UPDATE_DONATORBYID_REQUEST'});
    try {
        const res = await axios.post('/api/donator/updateddonator',{updatedDonator});
        dispatch({type : 'UPDATE_DONATORBYID_SUCCESS',payload : res.data});
        window.location.href = '/editDonator';
    } catch (err) {
        dispatch({type : 'UPDATE_DONATORBYID_FAIL',payload : err});
    }
  };
  

  
export const deleteDonator = (donatorId) => async (dispatch) => {
    try {
        await axios.post('/api/donator/deleteddonator',{donatorId});
        localStorage.removeItem('currentDonator');
        alert("Donator Deleted Successfully!","success");
        window.location.href = '/';
    } catch (error) {
        alert("Error While Deleting Donator");
    }
  };
  