import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import UrlsStore from "../stores/urlsStore";
import CreateUrlStore from "../stores/createUrlStore";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        addButton:{
            backgroundColor: "#19B5FE"
        }

    }),
);

export interface IAppHeaderProps{
    urlsStore: UrlsStore;
    createUrlStore: CreateUrlStore;
}

export default function ButtonAppBar(props: IAppHeaderProps) {

    const {urlsStore, createUrlStore} = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Url Shortcuts
                    </Typography>
                    <Button variant="contained" color="secondary" startIcon={<RefreshIcon/>} className={classes.menuButton} onClick={() => urlsStore.reset()}>Refresh</Button>
                    <Button variant="contained" startIcon={<AddIcon/>} className={classes.addButton} onClick={createUrlStore.open}>Add Url</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
