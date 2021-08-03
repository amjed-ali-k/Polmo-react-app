import React from 'react';
import PropTypes from 'prop-types';

const DlRowAddress = (props) => (
    <React.Fragment>
        <dl className="row">
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Address</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>{props.current_user.address}</dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>City</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>{props.current_user.city}</dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>State</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>{props.current_user.state}</dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>ZIP</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>{props.current_user.zip}</dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Country</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>{props.current_user.country}</dd>
        </dl>
    </React.Fragment>
)
DlRowAddress.propTypes = {
    leftSideClassName: PropTypes.node,
    rightSideClassName: PropTypes.node,
    current_user: PropTypes.object.isRequired
};
DlRowAddress.defaultProps = {
    leftSideClassName: "",
    rightSideClassName: ""
};

export { DlRowAddress };
