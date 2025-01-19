import React, { useEffect, useState } from 'react';
import { fetchMergeRequests } from '../api/api';

function DeveloperPerformance() {
    const [developers, setDevelopers] = useState([]);

    useEffect(() => {
        async function loadDeveloperData() {
            const mergeRequests = await fetchMergeRequests(278964);
            const devMap = {};

            mergeRequests.forEach((mr) => {
                const username = mr.author.username;
                if (!devMap[username]) {
                    devMap[username] = { mrs: 0, comments: 0 };
                }
                devMap[username].mrs += 1;
                devMap[username].comments += mr.user_notes_count;
            });

            const devList = Object.keys(devMap).map((username) => ({
                name: username,
                mrs: devMap[username].mrs,
                avgComments: devMap[username].comments / devMap[username].mrs || 0,
            }));

            setDevelopers(devList);
        }

        loadDeveloperData();
    }, []);

    return (
        <div>
            <h2>Developer Performance</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>MRs</th>
                        <th>Avg Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {developers.map((dev, index) => (
                        <tr key={index}>
                            <td>{dev.name}</td>
                            <td>{dev.mrs}</td>
                            <td>{dev.avgComments.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DeveloperPerformance;
