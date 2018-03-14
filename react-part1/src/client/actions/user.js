export const updateUser = user => ({
    type: 'UPDATE_USER',
    payload: user,
});

export const loginSuccess = user => (dispatch) => {
    dispatch(updateUser(user))
};

export const logout = (history) => (dispatch) => {
    document.body.classList.add('disabled');

    dispatch(updateUser({
        isAuthenticated: false,
        userName: null,
        userId: null
    }));

    fetch(`http://localhost:8000/api/logout`, { method: 'GET', credentials: 'include' })
        .then(() => {
            history.go(0);
        })
};

