import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../utils/actions';

const UserProfile = () => {
    const user = useSelector(state => state.user);
    return user ? <h2>Bem vindo, {user.name}!</h2> : <h2>Faça login</h2>
}

const LoginButton = () => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(login({ name: 'Teste', email: 'teste@teste.com'}))}>
            Login
        </button>
    )
}

const LogoutButton = () => {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(logout())}>Logout</button>
}

const Header = () => {
    return(
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="User"
            >
                <LoginButton />
                <LogoutButton />
                <UserProfile />
            </Select>
        </FormControl>
    )
}

export default Header;