import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={() => props.handleModal()} className="what" href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a onClick={() => props.onClick()} className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}