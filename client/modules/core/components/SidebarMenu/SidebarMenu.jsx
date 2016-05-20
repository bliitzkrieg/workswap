import React from 'react';
import { Glyphicon, Label, OverlayTrigger, Tooltip } from 'react-bootstrap';

class SidebarMenu extends React.Component {

    buildTooltip(text) {
        return (
            <Tooltip id="tooltip">{ text }</Tooltip>
        );
    }

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
                    <a className="sidebar__menu__item_link" href="/prospects">
                        <Glyphicon glyph="screenshot" className="sidebar__menu__item__icon"/>Prospects
                        <OverlayTrigger placement="right" overlay={ this.buildTooltip( 'A prospect is a unique url that is tracked independently' ) }>
                            <i className="fa fa-question-circle sidebar__menu__item__tooltip" aria-hidden="true"></i>
                        </OverlayTrigger>
                    </a>
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