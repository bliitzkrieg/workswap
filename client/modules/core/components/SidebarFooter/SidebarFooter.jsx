import React from 'react';
import constants from '../../../../configs/constants';

class SidebarFooter extends React.Component {

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <div className="sidebar__footer">
                <ul className="sidebar__footer__links">
                    <li>
                        <a href="/terms">Terms</a>
                    </li>
                    <li>
                        <a href="/privacy">Privacy</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                <p className="copyright text-muted small">Copyright &copy; { constants.sitename } { this.getYear() }.</p>
                <p className="copyright text-muted small">All Rights Reserved</p>
            </div>
        );
    }
}


export default SidebarFooter;