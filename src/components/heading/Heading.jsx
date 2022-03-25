import React, { useState, useEffect } from 'react';

const Heading = ( { beginNaam } ) => {
    const [naam, setNaam] = useState();

    useEffect(() => {
        console.log("hallo ik ben useEffect");
        setNaam(beginNaam);
    }, [beginNaam]);

    return(
        <div>
            <h1>{naam}</h1>
            <button onClick={() => setNaam(naam + 1)}>klik hier</button>
        </div>
    );
};

export default Heading;