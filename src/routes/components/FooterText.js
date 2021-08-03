import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
		<i className="fa fa-copyright"/> { props.year } All Rights Reserved. This is the &quot;{ props.name }&quot; built with <strong>{ props.desc }</strong>.
		<p>Made with <i className="fa fa-heart text-danger"/> by <strong>Amjed Ali</strong> </p>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2021",
    name: "Online Cloud Management system",
    desc: "React"
};

export { FooterText };
