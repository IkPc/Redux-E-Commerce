import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'; // You need to import MenuItem
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/user/actions';

// Component to display user profile
const UserProfile = () => {
    const user = useSelector(state => state.user);
    return user ? <h2>Bem vindo, {user.name}!</h2> : <h2>Faça login</h2>;
};

// Component for the Login button
const LoginButton = () => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(login({ name: 'Teste', email: 'teste@teste.com' }))}>
            Login
        </button>
    );
};

// Component for the Logout button
const LogoutButton = () => {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(logout())}>Logout</button>;
};

// Main Header component
const Header = () => {
    const user = useSelector(state => state.user); // Get user from the Redux store

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">User</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="User">
                <MenuItem value="">
                    {user ? <UserProfile /> : <h2>Faça login</h2>} {/* Show profile or login text */}
                </MenuItem>
            </Select>

            {/* Conditionally render login or logout button based on user state */}
            {user ? <LogoutButton /> : <LoginButton />}
        </FormControl>
    );
};

export default Header;
