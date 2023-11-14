import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./register.css";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export default function Register() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    return (
        <>
            <div className="reg">
                <div className="registerContainer" >
                    <h1>Register Here</h1>

                    <div className="input-container1">
                        <label>User Name </label>
                        <input type="text" name="uname" placeholder="Enter your Name" required />
                        {/* {renderErrorMessage("uname")} */}
                    </div>
                    <div className="input-container1">
                        <label>Email Id </label>
                        <input type="text" name="mail" placeholder="Enter your Email Id" required />
                        {/* {renderErrorMessage("mail")} */}
                    </div>
                    <div className="input-container1">
                        <label>Password </label>
                        <input type="password" name="pass" placeholder="Enter your Password" required />
                        {/* {renderErrorMessage("Pass")} */}
                    </div>
                    <div className="input-container1">
                        <label>Phone Number </label>
                        <input type="text" name="number" placeholder="Enter your Phone number" required />
                        {/* {renderErrorMessage("Phone")} */}
                    </div>

                    <div className="radio">
                        <label>Blood Group </label>
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">A+</option>
                            <option value="2">B+</option>
                            <option value="3">A-</option>
                            <option value="1">AB+</option>
                            <option value="2">B-</option>
                            <option value="3">AB-</option>
                            <option value="2">O+</option>
                            <option value="3">O-</option>
                        </Form.Select>
                    </div>

                    <div className="input-container1">
                        <label>Weight (kg)</label>
                        <input type="text" name="weight" placeholder="Enter your weight" required />
                    </div>
                    <div className="input-container1">
                        <label>Date of Birth</label>
                        <input type="date" name="dob" required />
                    </div>
                    <div className='select'>
                        <label className='radio'> Gender: </label>
                        Male <input type="radio" className='mx-2 mt-1' name='isselect' value={"0"} />
                        Female <input type="radio" className='mx-2 mt-1' name='isselect' value={"0"} />
                        Other <input type="radio" className='mx-2 mt-1' name='isselect' value={"0"} />
                    </div>
                    <div className="textarea">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Write Your Health Problem</Form.Label>
                                <Form.Control as="textarea" rows={"2"} placeholder='Write your text' />
                            </Form.Group>
                        </Form>
                    </div>

                    <div className="pincontainer">
                        <label>Pin Code </label>
                        <input type="text" name="pin" placeholder="Enter your Pin Code" required />
                        {/* {renderErrorMessage("pin")} */}
                    </div>

                    <div className="textarea">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Write Your Address</Form.Label>
                                <Form.Control as="textarea" rows={"2"} placeholder='Write your Address' />
                            </Form.Group>
                        </Form>
                    </div>


                    <div className='check'>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                    </div>
                    <Button className='trems' variant="outline-info" onClick={handleClickOpen}>Terms and Condition</Button>{' '}
                    <p>You have a account?<a href="#">Login</a></p>
                    <div>
                        <Button className="btn-r" variant="primary"  >Register</Button>{' '}
                    </div>


                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                            Terms and Condition
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                Terms and Conditions for Blood Unity Website
                            </Typography>
                            <Typography gutterBottom>
                                Acceptance of Terms
                                By using our blood donation website, you agree to comply with and be bound by the following terms and conditions.
                                If you do not agree with these terms, please do not use the website.
                            </Typography>
                            <Typography gutterBottom>
                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                                magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                                ullamcorper nulla non metus auctor fringilla.
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Agree
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </div>
            </div>
        </>
    );
}