// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// Css imports
import './index.scss';

export function BreadCrumbs({ breadCrumbs }) {
    return (
        <Breadcrumb className="breadcrumbs-wrapper">
            {breadCrumbs.map((item, index) => (
                <BreadcrumbItem key={index} active={item.active}>
                    {item.url ?
                        <Link to={item.url}>{item.name}</Link> :
                        item.name}
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    )
}


BreadCrumbs.propTypes = {
    breadCrumbs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}