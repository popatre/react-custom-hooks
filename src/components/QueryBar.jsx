import React from "react";
import Button from "./Button";

export default function QueryBar({ setQuery }) {
    return (
        <div>
            <Button label="Quilting" onClick={() => setQuery("quilting")} />
            <Button
                label="Architecture"
                onClick={() => setQuery("architecture")}
            />
            <Button label="Coding" onClick={() => setQuery("coding")} />
        </div>
    );
}
