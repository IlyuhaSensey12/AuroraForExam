import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/showAllPosts')
            .then(response => {
                console.log('Posts data:', response.data);
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts data:', error);
            });
    }, []);

    return (
        <AppContext.Provider value={{ posts }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };