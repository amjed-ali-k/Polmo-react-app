import React, {useState} from 'react';
import { Link } from 'react-router-dom';

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
import {login} from "../../../services/auth";

const Login = () => {
    const [fields, setFields] = useState({username: "", password: ""})
    const [errors, setErrors] = useState({message: ""});

    const handleChange = (e) => {
        const field = {...fields};
        field[e.target.name] = e.target.value;
        setFields(field);
    }
    const doSubmit = async () => {
        try {
            const {data} = await login(fields.username, fields.password);
            console.log(data.access_token);
            localStorage.setItem('token', data.access_token);
            window.location.href = '/';
        } catch (ex) {
            if(ex.response && ex.response.status === 401) {
                const message = ex.response.data.detail;
                setErrors({message: message});
                console.log(errors.message)
            }
        }
    }
    return (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Sign In to Dashboard"
                text={"Enter your auth credentials to access dashboard."}
            />
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3">
                <FormGroup>
                    <Label for="emailAdress">
                        Username
                    </Label>
                    <Input type="text" name="username" id="username" placeholder="Enter username..." onChange={handleChange} className="bg-white" />
                    <FormText className={"text-center"} color="danger">
                        { errors.message }
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input type="password" name="password" id="password" placeholder="Password..." onChange={handleChange} className="bg-white" />
                </FormGroup>
                <FormGroup>
                    <CustomInput type="checkbox" id="rememberPassword" label="Remember Password" inline />
                </FormGroup>
                <ThemeConsumer>
                {
                    ({ color }) => (
                        <Button color={ color } onClick={doSubmit} block tag={ Link }>
                            Sign In
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
                <Link to="/auth/register" className="ml-auto text-decoration-none">
                    Register
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
)};

export default Login;
