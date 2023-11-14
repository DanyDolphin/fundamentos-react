import React, { useEffect, useState } from 'react';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json();
            setPosts(data.results);
        }
        fetchCharacters();
    }, []);

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.name}</li>
            ))}
        </ul>
    )
}

export default Posts;
