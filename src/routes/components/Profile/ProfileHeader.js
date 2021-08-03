import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import { 
    Badge,
    Media,
    Avatar,
    AvatarAddOn
} from './../../../components';


const ProfileHeader = (props) => (
    <React.Fragment>
        { /* START Header */}
        <Media className="mb-3">
            <Media left middle className="mr-3 align-self-center">
              <Avatar.Image
                size="lg"
                src={ props.user.avatar }
                className="mr-2"
                addOns={[
                    <AvatarAddOn.Icon 
                        className="fa fa-circle"
                        color="white"
                        key="avatar-icon-bg"
                    />,
                    <AvatarAddOn.Icon 
                        className="fa fa-circle"
                        color="success"
                        key="avatar-icon-fg"
                    />
                ]}
            />
            </Media>
            <Media body>
                <h5 className="mb-1 mt-0">
                    <Link to="/apps/profile-details">
                         { props.user.first_name }  { props.user.last_name }
                    </Link> <span className="text-muted mx-1"> / </span> Profile Edit
                </h5>
                { props.user.badges && props.user.badges.map((badge) => {
                    return(<Badge key={badge} color="primary" pill className="mr-2">{badge}</Badge>)
                })}

                <span className="text-muted">Edit Your Name, Avatar, etc.</span>
            </Media>
        </Media>
        { /* END Header */}
    </React.Fragment>
)

ProfileHeader.protoTypes = {
    user: PropTypes.object.isRequired
}

export { ProfileHeader };
