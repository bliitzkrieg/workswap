import React from 'react';
import constants from '../../../../configs/constants';

const ProfileUrl = (props) => (
    <a href={  `${ constants.url }/user/${ props.username }` } alt={ `${ props.fname } ${ props.lname }'s Profile` }>
        { `${ props.fname } ${ props.lname }` }
    </a>
);

export default ProfileUrl;