import React, { useEffect, useState } from 'react';
import { fetchProjects, fetchMergeRequests } from '../api/api';

function Dashboard() {
    const [totalMRs, setTotalMRs] = useState(0);
    const [averageComments, setAverageComments] = useState(0);
    const [topPerformer, setTopPerformer] = useState('');

    useEffect(() => {
        async function loadData() {
            const projects = await fetchProjects();
            if (projects.length > 0) {
                const mergeRequests = await fetchMergeRequests(projects[0].id);
                setTotalMRs(mergeRequests.length);

                let totalComments = 0;
                mergeRequests.forEach((mr) => {
                    totalComments += mr.user_notes_count;
                });
                setAverageComments(totalComments / mergeRequests.length || 0);

                // Find top performer (e.g., most MRs created)
                const performerMap = {};
                mergeRequests.forEach((mr) => {
                    performerMap[mr.author.username] = (performerMap[mr.author.username] || 0) + 1;
                });
                const topUser = Object.keys(performerMap).reduce((a, b) =>
                    performerMap[a] > performerMap[b] ? a : b
                );
                setTopPerformer(topUser);
            }
        }

        loadData();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <div className="stats">
                <div className="card">Total MRs: {totalMRs}</div>
                <div className="card">Avg Review Comments: {averageComments.toFixed(2)}</div>
                <div className="card">Top Performer: {topPerformer}</div>
            </div>
        </div>
    );
}

export default Dashboard;
