import React from 'react';

export default function Button(props) {
    return (
        <div>
            <button onClick={() => props.clickFunc()}>{props.text}</button>
        </div>
    );
}
