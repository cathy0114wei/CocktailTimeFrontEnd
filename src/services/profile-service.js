const USER_URL = "http://localhost:3001/api";

export const findAllProfiles = () =>
    fetch(`${USER_URL}/profiles`)
        .then(res => res.json());

export const findProfile = () =>
    fetch(`${USER_URL}/profile`, {
        credentials: 'include'
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return undefined;
            }
        });
export const findProfileById = (userId) =>
    fetch(`${USER_URL}/profiles/${userId}`, {
        credentials: 'include',
    })
        .then(response => response.json());
