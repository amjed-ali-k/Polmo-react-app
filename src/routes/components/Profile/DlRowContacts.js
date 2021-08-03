import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const DlRowContacts = (props) => {
    return (
        <React.Fragment>
            <dl className="row">
                <dt className={`col-sm-3 ${props.leftSideClassName}`}>Phone</dt>
                <dd className={`col-sm-9 ${props.rightSideClassName}`}>{props.current_user.contact_number}</dd>
                <dt className={`col-sm-3 ${props.leftSideClassName}`}>Fax</dt>
                <dd className={`col-sm-9 ${props.rightSideClassName}`}>727-613-5840</dd>
                <dt className={`col-sm-3 ${props.leftSideClassName}`}>Email</dt>
                <dd className={`col-sm-9 ${props.rightSideClassName}`}>{props.current_user.email}</dd>
                {
                    _.map(props.current_user.social, function (value, key) {
                        return (<>
                            <dt className={`col-sm-4 text-capitalize ${props.leftSideClassName}`}>{key}</dt>
                            <dd className={`col-sm-8 ${props.rightSideClassName}`}>{value}</dd>
                        </>)
                    })}

            </dl>
        </React.Fragment>
    )
}
DlRowContacts.propTypes = {
    leftSideClassName: PropTypes.node,
    rightSideClassName: PropTypes.node,
    current_user: PropTypes.object.isRequired
};
DlRowContacts.defaultProps = {
    leftSideClassName: "text-right",
    rightSideClassName: "text-left",
};

export {DlRowContacts};
