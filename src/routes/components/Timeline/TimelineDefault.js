import React from 'react';
import PropTypes from 'prop-types';

const TimelineDefault = (props) => (
    <React.Fragment>
        { /* START TIMELINE Default */}
        <div className="timeline timeline-datetime">
            {
                props.showPillDate && (
                    <React.Fragment>
                        { /* START PILL Date */}
                        <div className="timeline-date">
                            <span className="badge badge-pill badge-secondary">
                                {props.pillDate}
                            </span>
                        </div>
                        { /* END PILL Date */}
                    </React.Fragment>
                )
            }
            <div className="timeline-item pr-3">
                { /* START Small ICON  */}
                <div className="timeline-icon">
                    <i className={` fa fa-circle-o text-${props.smallIconColor}`}/>
                </div>
                { /* END Small ICON  */}
                <div className="timeline-item-inner pb-0">
                    { /* START HOUR  */}
                    <span className="timeline-item-time">
                        {props.day}
                    </span>
                    { /* START HOUR  */}
                    <div className="timeline-item-head pb-0">
                        { /* START ICON Circle  */}
                        <div className="pull-left mr-2">
                            <span className="fa-stack fa-lg">
                                <i className={` fa fa-circle fa-stack-2x text-${props.iconCircleColor}`}/>
                                <i className={` fa fa-stack-1x text-white fa-${props.iconCircle}`}/>
                            </span>
                        </div>
                        { /* END ICON Circle  */}
                        <div className="user-detail">
                            { /* START TITLE  */}
                            <h6 className="mb-0">
                                {props.title}
                            </h6>
                            { /* END TITLE  */}
                            { /* START SUB-TITLE  */}
                            <p>
                                {props.subtitle}
                            </p>
                            { /* END SUB-TITLE  */}
                        </div>
                    </div>
                    { /* START CONTENT  */}

                        <div className="timeline-item-content">
                            <p>
                                {props.description}
                            </p>
                        </div>

                    { /* END CONTENT  */}
                </div>
            </div>
        </div>
        { /* END TIMELINE Default */}
    </React.Fragment>
)

TimelineDefault.propTypes = {
    showPillDate: PropTypes.bool,
    pillDate: PropTypes.string,
    smallIconColor: PropTypes.string,
    iconCircleColor: PropTypes.string,
    iconCircle: PropTypes.string,
    badgeTitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    subtitle: PropTypes.string,
    day: PropTypes.string,
    time: PropTypes.string

};

TimelineDefault.defaultProps = {
    showPillDate: false,
    pillDate: "Waiting",
    smallIconColor: "secondary",
    iconCircleColor: "secondary",
    iconCircle: "",
    description: ""
};

export {TimelineDefault};
