import React, {ReactPropTypes} from 'react';
import PropTypes from 'prop-types';

import { 
    Avatar,
    AvatarAddOn
} from './../../components';


const Profile = ({user}) => {

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center my-3">
                <Avatar.Image
                    size="lg"
                    src={ user.avatar }
                    addOns={[
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color="white"
                            key="avatar-icon-white-bg"
                        />,
                        <AvatarAddOn.Icon
                            className="fa fa-circle"
                            color="success"
                            key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                            className="fa fa-star"
                            color="white"
                            key="avatar-icon-fg"
                            small
                        />
                    ]}
                /> 
            </div>
            <div className="mb-4 text-center">
                <a className="h6 text-decoration-none" href="#">
                    { user.first_name } { user.last_name }
                </a>
                <div className="text-center mt-2">
                    { user.designation }
                </div>
                <div className="text-center">
                    <i className="fa fa-map-marker mr-1"/>
                    { user.state + ', ' + user.country }
                </div>
            </div>
        </React.Fragment>
    )
}

Profile.propTypes = {
    user: PropTypes.object.isRequired
}

export { Profile };

