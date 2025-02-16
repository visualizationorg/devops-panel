import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';

const WorkItemsPieChart = ({ workItems }) => {
    // Erken return ile null/undefined kontrolü
    if (!workItems || !Array.isArray(workItems)) {
        return (
            <Box sx={{ p: 3, textAlign: 'center' }}>
                <Typography>Veri bulunamadı</Typography>
            </Box>
        );
    }

    const stateCounts = workItems.reduce((acc, item) => {
        const state = item?.fields?.['System.State'];
        if (state) {
            acc[state] = (acc[state] || 0) + 1;
        }
        return acc;
    }, {});

    const data = {
        labels: Object.keys(stateCounts),
        datasets: [
            {
                data: Object.values(stateCounts),
                backgroundColor: [
                    '#4CAF50', // Done
                    '#FFC107', // In Progress
                    '#F44336', // To Do
                    '#2196F3', // New
                    '#9C27B0', // Diğer
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Work Item Durumları',
            },
        },
    };

    return (
        <Box sx={{ height: 300, p: 2 }}>
            <Pie data={data} options={options} />
        </Box>
    );
};

export default WorkItemsPieChart; 
