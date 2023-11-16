import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const url = 'https://rickandmortyapi.com/api/character'
            const response = await fetch(url);
            const data = await response.json();
            setPosts(data.results);
        }
        fetchCharacters();
    }, []);

    return (
        <ul>
            {createPortal(
                <h1>Este es mi portal</h1>,
                document.getElementById('modal')
            )}
            {posts.map((post) => (
                <li key={post.id}>{post.name}</li>
            ))}
        </ul>
    )
}

export default Posts;
