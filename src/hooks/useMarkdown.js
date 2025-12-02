import { useState, useEffect } from 'react';

const getPath = (path) => {
    const baseUrl = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${baseUrl}${cleanPath}`;
};

export const useMarkdown = (file) => {
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!file) return;

        setLoading(true);
        fetch(getPath(file))
            .then(res => {
                if (!res.ok) throw new Error(`Failed to fetch ${file}`);
                return res.text();
            })
            .then(text => {
                setContent(text);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [file]);

    return { content, error, loading };
};
