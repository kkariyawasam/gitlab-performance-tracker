GitLab API Client

This project provides utility functions to interact with the GitLab API, enabling you to fetch details about projects, merge requests, and review comments. The implementation uses axios for making HTTP requests.

Features

Fetch all projects from a GitLab instance.

Retrieve merge requests for a specific project.

Retrieve review comments for a specific merge request.

Prerequisites

Node.js: Make sure you have Node.js installed.

GitLab Personal Access Token: Generate a personal access token from your GitLab account. Ensure the token has the required scopes (e.g., api scope).

Installation

Clone the repository:

git clone <repository-url>

Navigate to the project directory:

cd <project-directory>

Install dependencies:

npm install axios

Usage

Set Up Your Environment

Replace YOUR_PERSONAL_ACCESS_TOKEN in the code with your GitLab personal access token.

Functions

1. Fetch Projects

Fetches all projects accessible by your account.

import { fetchProjects } from './path-to-file';

(async () => {
const projects = await fetchProjects();
console.log(projects);
})();

2. Fetch Merge Requests

Fetches merge requests for a specific project.

import { fetchMergeRequests } from './path-to-file';

(async () => {
const projectId = '<PROJECT_ID>'; // Replace with your project ID
const mergeRequests = await fetchMergeRequests(projectId);
console.log(mergeRequests);
})();

3. Fetch Review Comments

Fetches review comments for a specific merge request.

import { fetchReviewComments } from './path-to-file';

(async () => {
const projectId = '<PROJECT_ID>'; // Replace with your project ID
const mergeRequestId = '<MERGE_REQUEST_ID>'; // Replace with your merge request ID
const comments = await fetchReviewComments(projectId, mergeRequestId);
console.log(comments);
})();

Error Handling

Ensure you handle errors in your application to manage API request failures gracefully:

try {
const data = await fetchProjects();
console.log(data);
} catch (error) {
console.error('Error fetching projects:', error);
}

GitLab API Documentation

For more details on the GitLab API endpoints, refer to the official documentation:

Projects API

Merge Requests API

Notes (Comments) API

License

This project is licensed under the MIT License.
