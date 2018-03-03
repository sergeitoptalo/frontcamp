export const updateUser = user => ({
    type: 'UPDATE_USER',
    payload: user,
});

/* export const loginHandler = userData => (dispatch) => {
    return fetch(`http://localhost:8000/api/loginHandler`,
        {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(user => {
            dispatch(updateUser(user))
        });
}; */

export const loginSuccess = user => (dispatch) => {
    dispatch(updateUser(user))
};
