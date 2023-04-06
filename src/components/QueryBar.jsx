import React from "react";
import Button from "./Button";

export default function QueryBar({ setQuery }) {
    return (
        <div>
            <Button label="Quilting" onClickFunc={() => setQuery("quilting")} />
            <Button
                label="Architecture"
                onClickFunc={() => setQuery("architecture")}
            />
            <Button label="Coding" onClickFunc={() => setQuery("coding")} />
        </div>
    );
}
