export const userPostFetch = user => {
    return dispatch => {
        return fetch("http://5da5c7ce57f48b0014fbad58.mockapi.io/api/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {

                } else {
                    console.log('data', data);
                    localStorage.setItem("token", data.jwt)
                    dispatch(loginUser(data.user))
                }
            })
    }
}

export const userLoginFetch = user => {
    return dispatch => {
        return fetch("http://5da5c7ce57f48b0014fbad58.mockapi.io/api/userFetch", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    // Here you should have logic to handle invalid login credentials.
                    // This assumes your Rails API will return a JSON object with a key of
                    // 'message' if there is an error
                } else {
                    localStorage.setItem("token", data.jwt)
                    dispatch(loginUser(data.user))
                }
            })
    }

}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
});

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})