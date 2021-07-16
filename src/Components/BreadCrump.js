import React from 'react';
import { Link } from 'react-router-dom';
const BreadCrumb = ({charactername}) =>(

    <div className="breadcrump">
        <div className="breadcrump-link">
            <Link to="/">
            <span id="#home">Home</span>
            </Link>
            <span>/</span>
            <span>{charactername}</span>
        </div>
    </div>
)
export default BreadCrumb;