import React from 'react';
import constants from '../../../../configs/constants';
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap';

class ProfileLink extends React.Component {

    constructor() {
        super();
        this.state = {
            copy: 'Copy'
        }
    }

    doSelect() {
        const input = this.refs.url;
        input.select();
    }

    doCopy() {
        const input = this.refs.url;
        input.select();

        try {
            document.execCommand('copy');
            input.blur();

            this.setState({
                copy: 'Copied!'
            });

            setTimeout(() => {
                this.setState({
                    copy: 'Copy'
                });
            }, 5000);
        }
        catch (err) {
            alert('Automatic copying is not supported by your browser.');
        }
    }

    buildTweet(url) {
        const hashtags = "resume, jobhunt, hiring";
        const text = 'You can view my online resume at';
        const tweet = `https://twitter.com/intent/tweet?text=${ text }&url=${ url }&hashtags=${ hashtags }`;

        return tweet;
    }

    buildFacebook(url) {
        const title = 'Click here to view my online resume.';
        const caption = 'Start tracking your resume with resume.io';
        const app_id = constants.fb_app_id;
        const description = constants.site_descripton;
        const fb = `https://www.facebook.com/dialog/feed?app_id=${ app_id }&display=popup&caption=${ caption }&redirect_uri=${ url }&link=${ url }&description=${ description }&picture=${ this.props.user.profile.avatar }&name=${ title }`;

        return fb;
    }

    buildTooltip(text) {
        return (
            <Tooltip id="tooltip">{ text }</Tooltip>
        );
    }

    render() {
        const url = `${ constants.url }/user/${ this.props.user.username }`;
        return (
            <div className="profile__link">
                <div className="subtitle__small">Your Link:</div>
                <input type="text" ref="url" onClick={ this.doSelect.bind(this) } value={ url } readOnly />
                <div className="profile__link__actions">
                    <div className="profile__link__action">
                        <OverlayTrigger placement="bottom" overlay={ this.buildTooltip('Open Profile') }>
                            <a href={ url } target="_blank">
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </a>
                        </OverlayTrigger>
                    </div>
                    <div className="profile__link__action" onClick={ this.doCopy.bind(this) }>
                        <OverlayTrigger placement="bottom" overlay={ this.buildTooltip( this.state.copy ) }>
                            <i className="fa fa-clipboard" aria-hidden="true"></i>
                        </OverlayTrigger>
                    </div>
                    <div className="profile__link__action">
                        <OverlayTrigger placement="bottom" overlay={ this.buildTooltip('Share on Facebook') }>
                            <a href={ this.buildFacebook(url) } target="_blank">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                        </OverlayTrigger>
                    </div>
                    <div className="profile__link__action">
                        <OverlayTrigger placement="bottom" overlay={ this.buildTooltip('Share on Twitter') }>
                            <a href={ this.buildTweet(url) } target="_blank">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        );
    }
}


export default ProfileLink;