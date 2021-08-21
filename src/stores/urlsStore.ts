import {action, transaction, observable, makeObservable} from "mobx";
import UrlsApi from "../api/urlsApi";
import {AxiosResponse} from "axios";

export default class UrlsStore {

    @observable public urls: [string, string][] = [];
    @observable public isLoading: boolean = false;
    @observable public loadError: boolean = false;
    @observable public errorMessage: string = "";

    constructor() {
        makeObservable(this);
        this.reset();
    }

    @action
    public async reset() {
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;


        UrlsApi.getAll()
            .then((res) => this._onLoadSuccess(res))
            .catch((err) => this._onLoadFailed(err))
            .finally(() => this._onCallEnd())
    }

    @action
    private _onLoadSuccess(res: AxiosResponse<any>) {
        this.urls = Object.entries(res.data);
    }
    @action
    private _onLoadFailed(err: any) {
        this.loadError = true;
        this.errorMessage = err;
    }
    @action
    private _onCallEnd() {
        this.isLoading = false
    }
}

