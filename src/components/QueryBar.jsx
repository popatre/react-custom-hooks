import React from "react";
import Button from "./Button";

export default function QueryBar({ setQuery }) {
    return (
        <div>
            <Button title="Quilting" func={setQuery} />
            <Button title="Architecture" func={setQuery} />
            <Button title="Coding" func={setQuery} />
        </div>
    );
}
