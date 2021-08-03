import React from 'react';
import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom';

import { 
    Button,
    Breadcrumb,
    ButtonToolbar,
    UncontrolledTooltip,
    BreadcrumbItem,
    ButtonGroup,
} from './../../../components';

const ProjectsSmHeader = (props) => (
    <React.Fragment>
        { /* START Header Nav */}
        <div className="d-flex flex-column flex-md-row mb-3 mb-md-0">
            <Breadcrumb className="mr-auto d-flex align-items-center">
                { /* START 1st */}

                {props.tree.map( (value, index) => {
                    return(
                        <BreadcrumbItem style={{cursor: 'pointer'}}  onClick={()=> {props.click(value.key)}} key={index}>
                            { value.key === 'root' ? <i className="fa fa-home"/> : value.folderName}
                        </BreadcrumbItem>)
                    })}
            </Breadcrumb>
            <ButtonToolbar>
                <ButtonGroup className="mr-auto mr-md-2">
                    <Button tag={ NavLink } to={ `${ props.linkList }` } color="secondary" outline className="align-self-center" id="tooltipShowList">
                        <i className="fa-fw fa fa-bars"/>
                    </Button>
                    <UncontrolledTooltip placement="bottom" target="tooltipShowList">
                        Show List
                    </UncontrolledTooltip>
                    <Button tag={ NavLink } to={ `${ props.linkGrid }` } color="secondary" outline className="align-self-center" id="tooltipShowGrid">
                        <i className="fa-fw fa fa-th-large"/>
                    </Button>
                    <UncontrolledTooltip placement="bottom" target="tooltipShowGrid">
                        Show Grid
                    </UncontrolledTooltip>
                        {
                            props.btnShowKanban && (
                                <React.Fragment>
                                    <Button tag={ NavLink } to={ `${ props.linkKanban }` } color="secondary" outline className="align-self-center" id="tooltipShowKanban">
                                        <i className="fa-fw fa fa-trello"/>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipShowKanban">
                                        Show Kanban
                                    </UncontrolledTooltip>
                                 </React.Fragment>
                                )
                        }
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={props.upload} color="primary" className="align-self-center" id="tooltipAddNew">
                        <i className="fa-fw fa fa-plus"/>
                    </Button>
                    <UncontrolledTooltip placement="bottom" target="tooltipAddNew">
                        Add New
                    </UncontrolledTooltip>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
        { /* END Header Nav */}
    </React.Fragment>
)
ProjectsSmHeader.propTypes = {
    subTitle: PropTypes.node,
    title: PropTypes.node,
    subTitleLink: PropTypes.string,
    linkList: PropTypes.node,
    linkGrid: PropTypes.node,
    btnShowKanban: PropTypes.bool,
        linkKanban: PropTypes.node
};
ProjectsSmHeader.defaultProps = {
    subTitle: "Folder",
    linkList: "#",
    linkGrid: "#",
    btnShowKanban: false,
        linkKanban: "/apps/tasks-kanban"
};

export { ProjectsSmHeader };
