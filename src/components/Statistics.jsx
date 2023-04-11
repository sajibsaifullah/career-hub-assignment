import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const assignmentMarks = [
        {assignment_no:'A1', marks:57 },
        {assignment_no:'A2', marks:54 },
        {assignment_no:'A3', marks:60 },
        {assignment_no:'A4', marks:59 },
        {assignment_no:'A5', marks:58 },
        {assignment_no:'A6', marks:52 },
        {assignment_no:'A7', marks:60 },
        {assignment_no:'A8', marks:60 },
    ]
    return (
        <div className='container mx-auto my-12 px-8' style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart
                width={500}
                height={400}
                data={assignmentMarks}
                >
                    <Area dataKey="marks" stroke="#8884d8" fill="#8884d8"></Area>
                    <XAxis dataKey="assignment_no"></XAxis>
                    <YAxis />
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>
            
        </div>
    );
};

export default Statistics;