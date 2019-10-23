export function setUserLocalStorage(user) {
    localStorage.setItem("USER", JSON.stringify(user));
}

export function getUserLocalStorage() {
    return JSON.parse(localStorage.getItem("USER"));
}

export function setTokenLocalStorage(token) {
    localStorage.setItem("USER_TOKEN", JSON.stringify(token));
}

export function getTokenLocalStorage() {
    return JSON.parse(localStorage.getItem("USER_TOKEN"));
}



