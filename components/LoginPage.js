import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withWidth } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    papercenter: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.secondary,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.secondary,
    },
    button: {
        textAlign: 'center',
        withWidth: '200px'
    },
}));

const fabStyle = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        width: '100%!important',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 0px 0px 0px rgba(255, 105, 135, .3)',
      },
      label: {
        textTransform: 'capitalize',
      },
})

function LoginPage() {
    const classes = useStyle();
    const fabsses = fabStyle();
    return(
        <React.Fragment>
            <Container fixed maxWidth="xs">
                <Paper variant="outlined">
                    <div className={classes.root}>
                        <Grid container>
                            <Grid item xs={12} >
                                <div className={classes.papercenter}>
                                    <Typography variant="h5">User Login</Typography>
                                </div>
                                <Divider/>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.paper}>
                                    User Name
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.paper}>Password</div>
                                <Box display="flex" flexDirection="row-reverse" p={1}>
                                    <Box>

                                        <Typography variant="subtitle1" color="primary">Forgot Password?</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                            <Divider/>
                                <Box p={1}>
                                    <Fab
                                        variant="extended"
                                        size="medium"
                                        color="primary"
                                        aria-label="add"
                                        classes={{root: fabsses.root}}
                                    >
                                        Sigin
                                    </Fab>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Container>
        </React.Fragment>
    )
}

export default LoginPage;
    
    