import API from "./api";

export const addNewCities = async (data) => {
    try {
        const response = await API.post(`/cities`, data);
        return response.data
    } catch (e) {
        throw e;
    }
};

export const getAllCities = async () => {
    try {
        const response = await API.get(`/city`);
        return response.data;
    } catch (e) {
        throw e;
    }
};

export const addNewCity = async (data) => {
    try {
        const response = await API.post(`/city`, data);
        return response.data
    } catch (e) {
        throw e;
    }
};

export const removeCity = async (cityId) => {
    try {
        const response = await API.delete(`/city/${cityId}`);
        return response.data;
    } catch (e) {
        throw e;
    }
};

export const getCityByName = async (cityName) => {
    try {
        const response = await API.get(`/city/name/${cityName}`);
        return response.data;
    } catch (e) {
        throw e;
    }
};

export const removeCityByName = async (cityName) => {
    try {
        const response = await API.delete(`/city/name/${cityName}`);
        return response.data;
    } catch (e) {
        throw e;
    }
};
