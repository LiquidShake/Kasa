import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({title, content}) => {
    const [ openTab, setOpenTab ] = useState(false);

    const openCollapse = () => {
        setOpenTab((openTab) => !openTab); 
    };

    return (
        <>
            <div className="collapse">
                <div onClick={openCollapse} className="collapse_header">
                    <h2>{title}</h2>
                    {!openTab ? <i>{<FontAwesomeIcon icon={faAngleDown} />}</i> : <i>{<FontAwesomeIcon icon={faAngleUp} />}</i>}
                </div>
                {openTab && 
                    <div className="collapse_content">{content}</div>
                }
            </div>
        </>
    )
}

export default Collapse;