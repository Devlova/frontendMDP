import React from "react";
import PropTypes from "prop-types";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

import Link from 'next/Link';

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        background: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
});
function getItems() {
    var json = {
        list: 
        [
            {
                id: 1,
                title: "ADMIN",
                linkgroup:"Admin",
                items: [
                    {
                        id: 1,
                        name: "Gudang",
                        linkgroup:"Gudang",
                        subitems: [
                            {
                                id: 1,
                                name: "Production",
                                linkgroup:"Gudang",
                            },
                            {
                                id: 2,
                                name: "Distributor",
                                linkgroup:"Gudang",
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "User",
                        linkgroup:"User",
                        subitems: [
                            {
                                id: 1,
                                name: "Manage",
                                linkgroup:"User",
                            },
                            {
                                id: 2,
                                name: "Authority",
                                linkgroup:"User",
                            },
                            {
                                id: 3,
                                name: "Registry",
                                linkgroup:"User",
                            },
                            
                        ]
                    },
                    {
                        id: 3,
                        name: "Mapping",
                        linkgroup:"Mapping",
                    }
                ]
            },
            {
                id: 2,
                title: "Production",
                linkgroup:"Production",
                items: [
                    {
                        id: 1,
                        name: "Stock",
                        linkgroup:"Production",
                        subitems: [
                            {
                                id: 1,
                                name: "Bahan Mentah",
                                linkgroup:"Production",
                            },
                            {
                                id: 2,
                                name: "Product",
                                linkgroup:"Production",
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Pengiriman",
                        linkgroup:"Production",
                    },
                    {
                        id: 3,
                        name: "Pengeluaran",
                        linkgroup:"Production",
                    }
                ]
            },
            {
                id: 3,
                title: "Distributor",
                linkgroup:"Distributor",
                items: [
                    {
                        id: 1,
                        name: "Stock",
                        linkgroup:"Distributor",
                    },
                    {
                        id: 2,
                        name: "Penjualan",
                        linkgroup:"Distributor",
                    },
                    {
                        id: 3,
                        name: "D'O",
                        linkgroup:"Distributor",
                    }
                ]
            },
        ]
    };
    return json;
}
class Nav extends React.Component {
    state = {};
    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };
    render() {
        const items = getItems();
        const { classes } = this.props;
        return (
            <div>
                {items.list.map(list => {
                    return (
                        <List
                            className={classes.root}
                            key={list.id}
                            subheader={
                                <ListSubheader>{list.title}</ListSubheader>
                            }
                        >
                            {list.items.map(item => {
                                return (
                                    <div key={item.id}>
                                        {item.subitems != null ? (
                                            <div key={item.id}>
                                                
                                                <ListItem
                                                    button
                                                    key={item.id}
                                                    onClick={this.handleClick.bind(
                                                        this,
                                                        item.name
                                                    )}
                                                >
                                                    <ListItemText
                                                        primary={item.name}
                                                    />
                                                    {this.state[item.name] ? (
                                                        <ExpandLess />
                                                    ) : (
                                                        <ExpandMore />
                                                    )}
                                                </ListItem>
                                                
                                                <Collapse
                                                    key={list.items.id}
                                                    component="li"
                                                    in={this.state[item.name]}
                                                    timeout="auto"
                                                    unmountOnExit
                                                >

                                                    <List disablePadding>
                                                        {item.subitems.map(
                                                            sitem => {
                                                                return (
                                                                    
                                                                    <ListItem
                                                                        button
                                                                        key={
                                                                            sitem.id
                                                                        }
                                                                        className={
                                                                            classes.nested
                                                                        }
                                                                    >
                                                                        <Link href={'/'+sitem.linkgroup+'/'+sitem.name} passHref>
                                                                        <ListItemText
                                                                            key={
                                                                                sitem.id
                                                                            }
                                                                            primary={
                                                                                sitem.name
                                                                            }
                                                                        />
                                                                        </Link>
                                                                    </ListItem>
                                                                );
                                                            }
                                                        )}
                                                    </List>
                                                </Collapse>{" "}
                                            </div>
                                        ) : (
                                            
                                            <ListItem
                                                button
                                                onClick={this.handleClick.bind(
                                                    this,
                                                    item.name
                                                )}
                                                key={item.id}
                                            >
                                                <Link href={'/'+item.linkgroup+'/'+item.name} passHref>
                                                <ListItemText
                                                    primary={item.name}
                                                />
                                                </Link>
                                            </ListItem>
                                            
                                        )}
                                    </div>
                                );
                            })}
                            <Divider key={list.id} absolute />
                        </List>
                    );
                })}
            </div>
        );
    }
}

Nav.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Nav);
