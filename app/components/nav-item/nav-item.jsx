import React from 'react';

const NavItem = ({route, title}) => (
    <li>
        <a href={route}>{title}</a>
    </li>
);

export default NavItem;