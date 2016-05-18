import React from 'react';
import { Glyphicon, Label } from 'react-bootstrap';

class SidebarMenu extends React.Component {

    render() {
        return (
            <div className="sidebar__menu">
                <div className="sidebar__menu__item -active">
                    <a className="sidebar__menu__item_link" href="/">
                        <Glyphicon glyph="home" className="sidebar__menu__item__icon"/>Dashboard</a>
                </div>
                <div className="sidebar__menu__item">
                    <a className="sidebar__menu__item_link" href="/profile">
                        <Glyphicon glyph="user" className="sidebar__menu__item__icon"/>Profile</a>
                </div>
                <div className="sidebar__menu__item">
                    <a className="sidebar__menu__item_link" href="/messages">
                        <Glyphicon glyph="envelope" className="sidebar__menu__item__icon"/>Messages<Label
                        bsStyle="warning" className="sidebar__menu__item__label">9</Label></a>
                </div>
                <div className="sidebar__menu__item">
                    <a className="sidebar__menu__item_link" href="/jobs">
                        <Glyphicon glyph="education" className="sidebar__menu__item__icon"/>Jobs <Label
                        className="sidebar__menu__item__label">Coming Soon</Label></a>
                </div>
                <div className="sidebar__menu__item">
                    <a className="sidebar__menu__item_link" href="/logout">
                        <Glyphicon glyph="log-out" className="sidebar__menu__item__icon"/>Logout</a>
                </div>
            </div>
        );
    }
}

export default SidebarMenu;