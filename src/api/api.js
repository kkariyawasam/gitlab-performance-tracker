import axios from 'axios';

const API_BASE_URL = 'https://gitlab.com/api/v4';
const API_TOKEN = '';
const projectId = 278964;

export const fetchProjects = async () => {
    const response = await axios.get(`${API_BASE_URL}/projects`, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    return response.data;
};

export const fetchMergeRequests = async () => {
    const response = await axios.get(`${API_BASE_URL}/projects/${projectId}/merge_requests`);
    return response.data;
};

export const fetchReviewComments = async (projectId, mergeRequestId) => {
    const response = await axios.get(`${API_BASE_URL}/projects/${projectId}/merge_requests/${mergeRequestId}/notes`, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    return response.data;
};




