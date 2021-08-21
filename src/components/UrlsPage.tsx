import {Backdrop, CircularProgress, Snackbar} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React, {useEffect} from 'react';
import UrlsStore from "../stores/urlsStore";
import { observer } from "mobx-react";
import UrlsTable from "./UrlsTable";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
        pageMessage:{
            marginTop: "20%",
            width:"10%",
            marginLeft: "50%",
            transform: "translateX(-50%)"
        }
    }),
);


const UrlsPage = (props: any) => {
    const store: UrlsStore = props.store;

    const classes = useStyles();

    return (
        <div>
            {(!store || store.isLoading) &&
            <Backdrop className={classes.backdrop} open={store && store.isLoading}>
                Loading...
                <CircularProgress color="inherit"/>
            </Backdrop>}
            {(store && store.loadError) &&
                <Alert className={classes.pageMessage} severity="error">
                    Error Loading The Data
                </Alert>
            }
            {(store && !store.loadError && !store.isLoading && store.urls.length === 0) &&
            <Alert className={classes.pageMessage} severity="info">
               No Current URLS, Click the create button above to add a new url.
            </Alert>
            }
            {(store && !store.loadError && !store.isLoading && store.urls.length > 0) &&
                <UrlsTable />
            }
        </div>
    )
}

export default observer(UrlsPage)
