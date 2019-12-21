import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Nav} from './Nav';

export default class Page extends React.Component {
    render() {
        return(
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Nav>{this.props.children}</Nav>
            </ThemeProvider>
        );
    }
}


