import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Container,
    Row,
    Col,

    Card,
    // ButtonGroup,
    Button,
    CardBody,
    // CardFooter,
    CardGroup,
    // Table,
    TabPane,
    // Badge,
    Nav,
    NavItem,
    UncontrolledTabs
} from '../../../components';
import { HeaderMain } from "../../components/HeaderMain";

import { Profile } from "../../components/Profile";
import { ProfileOverviewCard } from "../../components/Profile/ProfileOverviewCard";
import { DlRowContacts } from "../../components/Profile/DlRowContacts";
import { DlRowAddress } from "../../components/Profile/DlRowAddress";
// import { TrTableMessages } from "./components/TrTableMessages";
import { TimelineDefault } from "../../components/Timeline/TimelineDefault";
import {getUser} from "../../../services/auth";
import {getUserHistory} from "../../../services/backendcalls";

import moment from "moment";

const user = getUser()

class ProfileDetails extends React.Component {
    state = {
        userHistory: []
    }
    async componentDidMount() {
        const data = await getUserHistory()
        if (data.status === 204){
            this.setState({userHistory: []})
        } else {
            this.setState({userHistory: data.data});
        }
    }

    render(){
        return(
            <React.Fragment>
                <Container>
                    <HeaderMain
                        title="Profile Details"
                        className="mb-5 mt-4"
                    />
                    { /* START Content */}
                    <Row>
                        <Col lg={4}>
                            <Card>
                                <CardBody>
                                    <Profile user={user}/>
                                    <div className="text-center pb-1">
                                        <ul className="list-inline">
                                            <li className="list-inline-item text-center">
                                                <h2 className="mb-1">23</h2>
                                                <span>Contracts</span>
                                            </li>
                                            <li className="list-inline-item text-center">
                                                <h2 className="mb-1">13</h2>
                                                <span>Tasks</span>
                                            </li>
                                            <li className="list-inline-item text-center">
                                                <h2 className="mb-1">5</h2>
                                                <span>Releases</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Row className="mt-3">
                                        <Col sm={12} md={12}>
                                            <Button color="secondary" outline block tag={Link} to="/profile/profile-edit">
                                                Edit Profile
                                            </Button>
                                        </Col>
                                    </Row>
                                    <div className="mt-4 mb-2">
                                <span className="small">
                                    Profile
                                </span>
                                    </div>
                                    <p className="text-left">
                                        {user.about}
                                    </p>

                                    <div className="mt-4 mb-2">
                                        <span className="small">Contact</span>
                                    </div>
                                    <DlRowContacts
                                        current_user={user}
                                        leftSideClassName="text-lg-left"
                                        rightSideClassName="text-lg-right text-inverse"
                                    />

                                    <div className="mt-4 mb-2">
                                        <span className="small">Address</span>
                                    </div>
                                    <DlRowAddress
                                        leftSideClassName="text-lg-left"
                                        rightSideClassName="text-lg-right text-inverse"
                                        current_user={user}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={8}>
                            <UncontrolledTabs initialActiveTabId="overview">
                                { /* START Pills Nav */}
                                <Nav pills className="mb-4 flex-column flex-md-row mt-4 mt-lg-0">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="overview">
                                            Overview
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="detailContact">
                                            Detail Contact
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                                { /* END Pills Nav */}
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="overview">
                                        <CardGroup className="mb-5">
                                            <Card body>
                                                <ProfileOverviewCard
                                                    title="Views"
                                                    badgeColor="primary"
                                                    badgeTitle="Monthly"
                                                    value="6.200"
                                                    valueTitle="Total Views"
                                                    footerTitle="Last Month"
                                                    footerTitleClassName="text-success"
                                                    footerIcon="caret-up"
                                                    footerValue="23%"
                                                />
                                            </Card>
                                            <Card body>
                                                <ProfileOverviewCard
                                                    title="Orders"
                                                    badgeColor="info"
                                                    badgeTitle="Annual"
                                                    value="75.938"
                                                    valueTitle="New Orders"
                                                    footerTitle="Last Annual"
                                                    footerTitleClassName="text-danger"
                                                    footerIcon="caret-down"
                                                    footerValue="96%"
                                                />
                                            </Card>
                                            <Card body>
                                                <ProfileOverviewCard
                                                    title="Visits"
                                                    badgeColor="secondary"
                                                    badgeTitle="Today"
                                                    value="75.938"
                                                    valueTitle="Total Visits"
                                                    footerTitle="Yesterday"
                                                    footerTitleClassName="text-success"
                                                    footerIcon="caret-up"
                                                    footerValue="40%"
                                                />
                                            </Card>
                                        </CardGroup>
                                        { this.state.userHistory.map((v)=>{
                                            const time = moment(v.time)
                                            return(
                                                <TimelineDefault key={v.time}
                                                    showPillDate
                                                    pillDate={time.fromNow()}
                                                    smallIconColor="success"
                                                    iconCircleColor="success"
                                                    iconCircle="check"
                                                    title={v.description}
                                                    subtitle={ v.description}
                                                    day={time.format('m:h A')}
                                                />
                                            );

                                        }) }

                                    </TabPane>
                                    <TabPane tabId="detailContact">
                                        <Card body>
                                            <div className="mb-2">
                                                <span className="small">Contact</span>
                                            </div>
                                            <DlRowContacts
                                                leftSideClassName="text-lg-right"
                                                rightSideClassName="text-inverse"
                                                current_user={user}
                                            />
                                            <div className="mt-4 mb-2">
                                                <span className="small">Address</span>
                                            </div>
                                            <DlRowAddress
                                                leftSideClassName="text-lg-right"
                                                rightSideClassName="text-inverse"
                                                current_user={user}
                                            />
                                        </Card>
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </UncontrolledTabs>
                        </Col>
                    </Row>
                    { /* END Content */}

                </Container>
            </React.Fragment>
        )
    }
}




export default ProfileDetails;