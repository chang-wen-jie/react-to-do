import React from 'react';

const Heading = ({ content }) => {
    const test = (data) => {
        alert(data);
    };

    return(
        <div>
            <h1>{content}</h1>
            <button onClick={test("hallo ik ben test")}>klik hier</button>
        </div>
    );
};

export default Heading;