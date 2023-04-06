import React from "react";

export default function Button({ title, func }) {
    const handleClick = () => {
        func(`/volumes?q=${title}`);
    };

    return <button onClick={handleClick}>{title}</button>;
}
