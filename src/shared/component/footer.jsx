// @flow

import React from 'react'

import { APP_NAME } from '../config'

const Footer = () =>
(
    <div className="container mt-5">
        <hr />
        <footer>
            <p>&copy; {APP_NAME} 2018</p>
        </footer>
    </div>
)

export default Footer
