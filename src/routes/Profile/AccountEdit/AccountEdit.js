import React from 'react';

import { 
    Container,
    Row,
    Col,
    Input,
    Card,
    Button,
    CardBody,
    CardFooter,
    CardTitle,
    Label,
    FormGroup,
    Form
} from '../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { ProfileLeftNav } from "../../components/Profile/ProfileLeftNav";
import { ProfileHeader } from "../../components/Profile/ProfileHeader";
import {getUser} from "../../../services/auth";
const user = getUser();
const AccountEdit = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Account Edit"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={ 12 }>
                   <ProfileHeader user={user} />
                </Col>
                <Col lg={ 3 }>
                    <ProfileLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-4">
                               <CardTitle tag="h6">
                                    Account Edit
                               </CardTitle>
                                <span className="ml-auto align-self-start small">
                                    Fields mark as <span className="text-danger">*</span> is required.
                                </span>
                            </div>
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="oldPassword" sm={3} className="text-right">
                                        <span className="text-danger">*</span> Old Password
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="password" 
                                            name="password" 
                                            id="oldPassword" 
                                            defaultValue="********"
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="newPassword" sm={3} className="text-right">
                                        <span className="text-danger">*</span> New Password
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="password" 
                                            name="password" 
                                            id="newPassword" 
                                            defaultValue="********"
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row className="mb-0">
                                    <Label for="confirmNewPassword" sm={3} className="text-right">
                                        <span className="text-danger">*</span> Confirm New Password
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="password" 
                                            name="password" 
                                            id="confirmNewPassword" 
                                            defaultValue="********"
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label sm={3} >

                                    </Label>
                                    <Col sm={8} className="pt-3">
                                        <Button color="primary">
                                            Update Profile
                                        </Button>
                                        <Button color="link">
                                            Forgot Password
                                        </Button>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}
                        </CardBody>
                        <CardFooter className="small">
                            <i className="fa fa-fw fa-support text-muted mr-2"/>
                            If you forgot the password, logout and click forgot password option.
                            Your reset password link will be sent to your email.
                        </CardFooter>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                           <CardTitle tag="h6">
                                Change Email
                           </CardTitle>
                            <p>
                                Changing the email is not recommended. Only proceed if you know what you are doing.
                            </p>
                            <Button color="secondary" outline>
                                Change Email
                            </Button>
                        </CardBody>
                    </Card>
                    <Card className="mb-3 b-danger">
                        <CardBody>
                           <CardTitle tag="h6" className="text-danger">
                                Delete Account
                           </CardTitle>
                            <p>
                                Once you delete your account, there is no going back. Please be certain.
                            </p>
                            <Button color="danger" outline>
                                Yes, Delete
                            </Button>
                        </CardBody>
                        <CardFooter className="small">
                            <i className="fa fa-fw fa-support text-muted mr-2"/>
                            Are you sure you don’t want to your <strong>Account</strong>? You cannot register again with same username or email after you deleted the account.
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}

        </Container>
    </React.Fragment>
);

export default AccountEdit;