import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {observer} from "mobx-react";
import CreateUrlStore from "../stores/createUrlStore";

export interface ICreateUrlDialogProps{
    store: CreateUrlStore;
}

const CreateUrlDialog = (props: ICreateUrlDialogProps) => {

    const {store} = props;

    return (
        <div>
            <Dialog open={store.isOpen} onClose={store.close} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create Url</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Enter The Url You wish to shorten
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="url"
                        label="Target Url"
                        type="email"
                        fullWidth
                        value={store.targetUrl}
                        onChange={(event) => store.updateUrl(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={store.close} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => store.submit()} disabled={store.isSubmitting} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default observer(CreateUrlDialog)
