import {API_URL} from "../const";

export const login = () => (
    fetch(
        `${API_URL}/users`,
        {
            method: 'POST',
        }
    )
);
