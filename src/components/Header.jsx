import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2 className='text-3xl'>This is Header</h2>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/appliedJobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
        </div>
    );
};

export default Header;