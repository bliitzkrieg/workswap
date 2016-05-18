import React from 'react';
import Avatar from '../../../core/components/Avatar/Avatar.jsx';
import ChangeAvatar from '../../containers/ChangeAvatar';
import SidebarMenu from '../../../core/components/SidebarMenu/SidebarMenu.jsx';
import ChangeEmployment from '../../containers/ChangeEmployment';
import ProfileLink from '../../../core/components/ProfileLink/ProfileLink.jsx';
import SidebarFooter from '../../../core/components/SidebarFooter/SidebarFooter.jsx';

class Sidebar extends React.Component {

    render() {
        const user = this.props.user;
        return (
            <aside>
                <div className="sidebar__logo">Resume.io</div>
                <Avatar cls="sidebar__avatar" src={ user.profile.avatar } height="90" width="90">
                    <ChangeAvatar />
                </Avatar>
                <div className="sidebar__name">{ user.profile.fname }</div>
                <SidebarMenu />
                <ChangeEmployment employed={ user.profile.employed }/>
                <ProfileLink user={ user } />
                <SidebarFooter />
            </aside>
        );
    }
}


export default Sidebar;

//<br/>
//Impressions: { this.props.user.profile.views.length }
//<br/>
//Recommendations: { this.props.user.profile.recommendations.length }