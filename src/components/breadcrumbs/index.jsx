// Module imports
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// Css imports
import './index.scss';

export function BreadCrumbs({ breadCrumbs }) {
    return (
        <Breadcrumb className="breadcrumbs-wrapper">
            {breadCrumbs.map(item => (
                <BreadcrumbItem key={item.name} active={item.active}>
                    {item.url ?
                        <Link to={item.url}>{item.name}</Link> :
                        item.name}
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    )
}