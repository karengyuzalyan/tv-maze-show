// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from "react-loading";

import './index.scss'

export function Loader(props) {  
    return (<div>
        {props.status ?
            props.children : 
            <ReactLoading className="loader" type="spinningBubbles" color="#2cb5ba" />
        }
    </div>
    )
}

Loader.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    status: PropTypes.number,
}