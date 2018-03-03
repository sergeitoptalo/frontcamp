export const isAlreadyUsedLogin = (currentLogin, loginArray) => {
    return loginArray.some(usedLogin => currentLogin === usedLogin.login)
};
