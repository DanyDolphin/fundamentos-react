import React, { useEffect, useState } from 'react';

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
            {posts.map((post) => (
                <li key={post.id}>{post.name}</li>
            ))}
        </ul>
    )
}

export default Posts;
