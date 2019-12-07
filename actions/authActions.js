import {ACTION_FAIL_USER, ACTION_LOGIN_USER, ACTION_LOGOUT_USER} from "../constants/actionTypes";
import {login, register, tokenize} from "../api/authApi";

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
};

// export const userLoginFetch = user => {
//     return dispatch => {
//         return fetch("http://5da5c7ce57f48b0014fbad58.mockapi.io/api/userFetch", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json',
//             },
//             body: JSON.stringify({user})
//         })
//             .then(resp => resp.json())
//             .then(data => {
//                 if (data.message) {
//                     // Here you should have logic to handle invalid login credentials.
//                     // This assumes your Rails API will return a JSON object with a key of
//                     // 'message' if there is an error
//                 } else {
//                     localStorage.setItem("token", data.jwt)
//                     dispatch(loginUser(data.user))
//                 }
//             })
//     }
// };

export const userLoginFetch = user => {
    return dispatch => {
        return login(user)
          .then(resp => {
              return resp.status === 200;
          })
          .then(loggedIn => {
              if (loggedIn) {
                  dispatch(loginUser({token: tokenize(user.username, user.password), username: user.username}))
              } else {
                  dispatch(failUser())
              }
          }).catch(reason => {
              console.error(reason);
          });
    }
};

export const userRegisterFetch = user => {
  return dispatch => {
    if (user.password !== user.confirmPassword) {
      dispatch(failUser('Passwords differ'));
    } else if (!user || !user.username || !user.password) {
      dispatch(failUser('Username or Password are empty'));
    } else {
      return register({
        username: user.username,
        password: user.password,
      }).then(response => {
        console.log(response);
        if (response.status !== 200) {
          return failUser('Internal server error');
        } else {
          return loginUser({
            token: tokenize(user.username, user.password),
            username: user.username,
          });
        }
      }).catch(reason => {
        dispatch(failUser(JSON.stringify(reason)));
      });
    }
  };
};

export const userLogout = () => {
  return dispatch => {
    dispatch(logoutUser());
  };
};

const loginUser = userObj => ({
    type: ACTION_LOGIN_USER,
    payload: userObj
});

const failUser = error => ({
  type: ACTION_FAIL_USER,
  payload: `${error && error || 'Login or Password are invalid'}`,
});

export const logoutUser = () => ({
    type: ACTION_LOGOUT_USER,
});
