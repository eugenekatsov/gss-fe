// PersonForm.js
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { getRequest } from '../utils';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, red, blue, yellow, green)',
    },
    input: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const PersonForm = ({ state, dispatch }) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleCreateUser = async () => {
        const userData = { name, id };

        // Make API call to create user using userData
        const request = getRequest('POST', userData);

        await fetchAndDisplay('Create User', '/users', request);
    };

    const handleUpdateUser = async () => {
        const userData = { name, id };

        const request = getRequest('PUT', userData);

        await fetchAndDisplay('Update User', `/users/${id}`, request);
    };

    const handleGetUser = async () => {
        const userData = { name, id };

        const request = getRequest('GET', userData);

        await fetchAndDisplay('Get User', `/users/${id}`, request);
    };

    const handleDeleteUser = async () => {
        const userData = { name, id };

        const request = getRequest('DELETE', userData);

        await fetchAndDisplay('Delete User', `/users/${id}`, request);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const fetchAndDisplay = async (message, endpoint, requestOptions) => {
        // Dispatch the action to indicate the API call is in progress
        dispatch({ type: 'REQUEST SENT' });
        try {
            const response = await fetch(endpoint, requestOptions);
            const jsonData = await response.json();
            dispatch({
                type: 'REQUEST_SUCCESS',
                payload: jsonData,
            });
            console.log("res is: ", jsonData);
            setSnackbarMessage(`Success! User: ${jsonData.name} Id: ${jsonData.id}`);
            setSnackbarOpen(true);
        } catch (e) {
            console.log(message, e);
            // Dispatch the action to handle API call failure
            dispatch({
                type: 'REQUEST_FAILURE',
                payload: { error: 'Failed to submit the person data' },
            });
        }
        delete requestOptions.body
        console.log(message, id);
    };

    return (
        <div className={classes.root}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                className={classes.input}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Id"
                value={id}
                className={classes.input}
                onChange={(e) => setId(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleCreateUser}
            >
                Create User
            </Button>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
            />
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={handleUpdateUser}
            >
                Update User Only Id
            </Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                onClick={handleGetUser}
            >
                Get User Only Id
            </Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                onClick={handleDeleteUser}
            >
                Delete User Only Id
            </Button>
        </div>
    );
};

export default PersonForm;