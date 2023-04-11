import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-center text-purple-600 my-4'>Some Important Q&A</h2>
            <div className='mx-2 lg:ml-12'>
                <h5 className='text-xl font-bold mb-2'>Q1: When should you use context API?</h5>
                <p><span className='font-bold'>Ans:</span> Context API in React is a way to share data between components without having to pass it down through each component as props. We should use Context API when we have data that needs to be accessed by multiple components at different levels of the component tree.</p>

                <h5 className='text-xl font-bold mb-2'>Q2: What is a custom hook?</h5>
                <p><span className='font-bold'>Ans:</span> A custom hook is a reusable function in React that allows you to extract and share logic across components. Custom hooks provide a way to abstract away complex logic and make it reusable across different components.</p>

                <h5 className='text-xl font-bold mb-2'>Q3: What is useRef?</h5>
                <p><span className='font-bold'>Ans:</span> In React, useRef is a hook that provides a way to store mutable values that persist across re-renders of a component. useRef returns a mutable ref object which can hold any value, similar to an instance variable in a class.</p>

                <h5 className='text-xl font-bold mb-2'>Q4: What is useMemo?</h5>
                <p><span className='font-bold'>Ans:</span> In React, useMemo is a hook that provides a way to memoize expensive computations so that they are only re-computed when their dependencies change.</p>
            </div>
        </div>
    );
};

export default Blog;