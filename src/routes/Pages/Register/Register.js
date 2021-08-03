import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
    Form,
    FormGroup,
    FormText,
    Input,
    CustomInput,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";
import {register} from "../../../services/auth";

const Register = () => {

    const [fields, setFields] = useState();
    const [errors, setErrors] = useState({message: ""});
    const history = useHistory();
    const handleChange = (e) => {
        const field = {...fields};
        field[e.target.name] = e.target.value;
        setFields(field);
    }

    const doSubmit = async () => {
        try {
            const payload = {...fields};
            const {data} = await register(payload);
            history.push("/auth/confirmation?email=" + data.email);
        } catch (ex) {
            if(ex.response && ex.response.status === 422) {
                const message = ex.response.data.detail;
                setErrors({message: message});
                console.log(errors.message);
            }
        }
    }
    return (
        <EmptyLayout>
            <EmptyLayout.Section center width={480}>
                { /* START Header */}
                <HeaderAuth
                    title="Create Account"
                />
                { /* END Header */}
                { /* START Form */}
                <Form className="mb-3">
                    <FormGroup>
                        <Label for="username">
                            Username
                        </Label>
                        <Input type="text" name="username" id="username" onChange={handleChange} placeholder="Enter a Username..."
                               className="bg-white"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="first_name">
                            First Name
                        </Label>
                        <Input type="text" name="first_name" id="first_name" onChange={handleChange} placeholder="Firstname" className="bg-white"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="last_name">
                            Last Name
                        </Label>
                        <Input type="text" name="last_name" id="last_name" onChange={handleChange} placeholder="Lastname" className="bg-white"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">
                            Password
                        </Label>
                        <Input type="password" name="password" id="password" onChange={handleChange} placeholder="Password..."
                               className="bg-white"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="repeatPassword">
                            Repeat Password
                        </Label>
                        <Input type="password" name="repeat_password" id="repeatPassword" onChange={handleChange} placeholder="Password..."
                               className="bg-white"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="emailAdress">
                            Email Address
                        </Label>
                        <Input type="email" name="email" id="emailAddress" onChange={handleChange} placeholder="Enter email..."
                               className="bg-white"/>
                        <FormText color="muted">
                            We&amp;ll never share your email with anyone else.
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <CustomInput type="checkbox" id="acceptTerms" label="Accept Terms and Privacy Policy" inline/>
                    </FormGroup>
                    <ThemeConsumer>
                        {
                            ({color}) => (
                                <Button color={color} block tag={Link} onClick={doSubmit}>
                                    Create Account
                                </Button>
                            )
                        }
                    </ThemeConsumer>
                </Form>
                { /* END Form */}
                { /* START Bottom Links */}
                <div className="d-flex mb-5">
                    <Link to="/auth/forgot-password" className="text-decoration-none">
                        Forgot Password
                    </Link>
                    <Link to="/auth/auth" className="ml-auto text-decoration-none">
                        Login
                    </Link>
                </div>
                { /* END Bottom Links */}
                { /* START Footer */}
                <FooterAuth/>
                { /* END Footer */}
            </EmptyLayout.Section>
        </EmptyLayout>
    )
};

export default Register;
