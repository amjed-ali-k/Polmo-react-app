import React, {useState} from 'react';

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
    CustomInput,
    Label,
    FormGroup,
    Form, Alert, Media
} from '../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { ProfileLeftNav } from "../../components/Profile/ProfileLeftNav";
import { ProfileHeader } from "../../components/Profile/ProfileHeader";
import {getUser, refreshtoken} from "../../../services/auth";
import http from "../../../services/httpservice"
import {apiUrl} from "../../../config.json";
import classNames from "classnames";
let user = getUser();

const ProfileEdit = () => {

    const [fields, setFields] = useState({username: user.username})
    const [errors, setErrors] = useState({message: ""});
    const [fielduser, setFielduser] = useState({...user})
    const [alerts, setAlerts] = useState({class: 'd-none', text: '', type: 'success', icon: 'check'})

    const handleChange = (e) => {
        const field = {...fields};
        field[e.target.name] = e.target.value;
        setFielduser(field)
        setFields(field);
    }
    const doSubmit = async () => {
        try {
            await http.put(apiUrl + '/users/me/edit/', fields);
            user = await refreshtoken(fields.password);
            let alertscopy = {...alerts};
            alertscopy = {
                class: '',
                text: 'You successfully updated your profile',
                type: 'success',
                icon: 'check',
                title: 'Success!'
            };
            setAlerts(alertscopy);
        } catch (ex) {
            if(ex.response && ex.response.status === 406) {
                const message = ex.response.data.detail;
                setErrors({message: message});
                console.log(errors.message);
                let alertscopy = {...alerts};
                alertscopy = {
                    class: '',
                    text: 'An error occured while submitting the form',
                    type: 'danger',
                    icon: 'times',
                    title: 'Error!'
                };
                setAlerts(alertscopy);
            }
        }
    }
    return (
    <React.Fragment>
        <Container>
            <HeaderMain
                title="Profile Edit"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={12}>
                    <ProfileHeader user={user}/>
                </Col>
                <Col lg={3}>
                    <ProfileLeftNav/>
                </Col>
                <Col lg={9}>
                    <Card>
                        <CardBody>
                            <div className="d-flex mb-4">
                                <CardTitle tag="h6">
                                    Profile Edit
                                </CardTitle>
                                <span className="ml-auto align-self-start small">
                                    Fields mark as <span className="text-danger">*</span> is required.
                                </span>
                            </div>
                            <Alert className={alerts.class} color={alerts.type}>
                                <Media>
                                    <Media left middle className="mr-3">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-fw fa-stack-2x alert-bg-icon"/>
                                        <i className={classNames('fa fa-stack-1x fa-inverse alert-icon', [`fa-${alerts.icon}`]) } />
                                    </span>
                                    </Media>
                                    <Media body>
                                        <h6 className="alert-heading mb-1">
                                            {alerts.title}!
                                        </h6>
                                        {alerts.text}

                                    </Media>
                                </Media>
                            </Alert>
                            <Form>
                                <div className="small mt-4 mb-3">
                                    Basic Details
                                </div>
                                { /* START File Select */}
                                {/*<FormGroup row>*/}
                                {/*    <Label for="uploadYourAvatar" sm={3} className="text-right">*/}
                                {/*        Upload Your Avatar*/}
                                {/*    </Label>*/}
                                {/*    <Col sm={8}>*/}
                                {/*        <CustomInput type="file" id="uploadYourAvatar" name="customFile"*/}
                                {/*                     label="Browse for a file to upload...."/>*/}
                                {/*        <FormText color="muted">JPG, GIF, PNG. Please choose a files under 500KB to*/}
                                {/*            upload. Recommended file size are 400 x 400px.</FormText>*/}
                                {/*    </Col>*/}
                                {/*</FormGroup>*/}
                                { /* END File Select */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="firstName" sm={3} className="text-right">
                                        <span className="text-danger">*</span> Full Name
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col sm={12} lg={6} className="mb-3 mb-md-0">
                                                <Input
                                                    type="text"
                                                    name="first_name"
                                                    value={fielduser.first_name}
                                                    id="inputHelper-1"
                                                    placeholder="First Name"
                                                    onChange={handleChange}
                                                />
                                            </Col>
                                            <Col sm={12} lg={6} className="mb-3 mb-md-0">
                                                <Input
                                                    type="text"
                                                    value={fielduser.last_name}
                                                    name="last_name"
                                                    id="inputHelper-2"
                                                    placeholder="Last Name"
                                                    onChange={handleChange}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="designation" sm={3} className="text-right">
                                        Designation
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="text"
                                            value={fielduser.designation}
                                            name="designation"
                                            id="designation"
                                            placeholder="Designation"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="gender" sm={3} className="text-right">
                                        Gender
                                    </Label>
                                    <Col sm={3}>
                                        <CustomInput
                                            type="select"
                                            name="gender"
                                            id="gender"
                                            onChange={handleChange}
                                        >
                                            <option >{user.gender ? user.gender : 'Select'}</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="address" sm={3} className="text-right">
                                        Address
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="text"
                                            name="address"
                                            value={fielduser.address}
                                            id="address"
                                            placeholder="Address"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="inputHelper-1" sm={3}>

                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col sm={12} lg={4} className="mb-3 mb-md-0">
                                                <Input
                                                    type="text"
                                                    name="state"
                                                    value={fielduser.state}
                                                    id="inputHelper-1"
                                                    placeholder="State"
                                                    onChange={handleChange}
                                                />

                                            </Col>
                                            <Col sm={12} lg={4} className="mb-3 mb-md-0">
                                                <Input
                                                    type="text"
                                                    name="country"
                                                    value={fielduser.country}
                                                    id="inputHelper-2"
                                                    placeholder="Country"
                                                    onChange={handleChange}
                                                />
                                            </Col>
                                            <Col sm={12} lg={4}>
                                                <Input
                                                    type="number"
                                                    name="zip"
                                                    value={fielduser.zip}
                                                    id="inputHelper-3"
                                                    placeholder="PIN Code"
                                                    onChange={handleChange}
                                                />

                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}

                                <div className="small mt-4 mb-3">
                                    Fill Profile
                                </div>
                                { /* END Radios */}
                                { /* START Textarea */}
                                <FormGroup row>
                                    <Label for="profile" sm={3} className="text-right">
                                        About me
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="textarea"
                                            name="about"
                                            value={fielduser.about}
                                            id="profile"
                                            placeholder="Please Describe about you."
                                            className="mb-2"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Textarea */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="addLabels" sm={3} className="text-right">
                                        Password
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="addLabels"
                                            placeholder="Current Password"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}
                        </CardBody>
                        <CardFooter className="text-right">
                            <Button color="primary" onClick={doSubmit}>
                                Update Profile
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}

        </Container>
    </React.Fragment>
)};

export default ProfileEdit;