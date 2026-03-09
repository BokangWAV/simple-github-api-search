import axios from "axios";

const API_URL = "https://api.github.com/users";

export const getUser = async (username) => {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
};

export const getRepos = async (username) => {
    const response = await axios.get(`${API_URL}/${username}/repos`);
    return response.data;
}
