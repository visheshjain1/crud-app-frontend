import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { loginUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import Alert from 'react-alert'

const initialValue = {
    email: '',
    password: ''
}

const Container = styled(FormGroup)`
    width: 20%;
    margin: 5% 0 0 35%;
    & > div {
        margin-top: 20px;
`;

const Login = () => {
    const [user, setUser] = useState(initialValue);
    const { email, password } = user;

    let navigate = useNavigate();
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        try {
            const resp = await loginUser(user);


            const token = resp.data.token;
            console.log(token)
            Cookies.set('token', token);
            navigate('/all');
        }
        catch (ex) {

            console.log('wrongcreds')
            alert('Wrong Credentials')

        }
    }


    return (
        <Container>
            <Typography variant="h4">Login User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password' type='password' value={password} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Login</Button>
            </FormControl>
        </Container>
    )
}

export default Login;