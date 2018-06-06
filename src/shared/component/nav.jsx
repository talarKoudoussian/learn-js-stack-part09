// @flow

/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import $ from 'jquery'

import {
    HOME_PAGE_ROUTE,
    HELLO_PAGE_ROUTE,
    HELLO_ASYNC_PAGE_ROUTE,
    NOT_FOUND_DEMO_PAGE_ROUTE,
} from '../routes'
import { APP_NAME } from '../config'

const handleNavLinkClick = () => {
    $('body').scrollTop(0)
    $('.js-navbar-collapse').collapse('hide')
}

const Nav = () =>
(
    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" role="button" data-toggle="collapse" data-target=".js-navbar-collapse">
            <span className="navbar-toggler-icon" />
        </button>
        <Link to={HOME_PAGE_ROUTE} className="navbar-brand">{APP_NAME}</Link>
        <div className="js-navbar-collapse collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                {[
                    { route: HOME_PAGE_ROUTE, label: 'Home' },
                    { route: HELLO_PAGE_ROUTE, label: 'Say Hello' },
                    { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' },
                    { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
                ].map(link => (
                    <li className="nav-item" key={link.route}>
                        <NavLink to={link.route} className="nav-link" activeStyle={{ color: 'limegreen' }} exact onClick={handleNavLinkClick}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
)

export default Nav