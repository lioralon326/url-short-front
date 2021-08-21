import {action, observable, makeObservable} from "mobx";
import UrlsApi from "../api/urlsApi";
import UrlsStore from "./urlsStore";

export default class CreateUrlStore {

    @observable isOpen: boolean = false;
    @observable targetUrl: string = ""

    private _urlsStore: UrlsStore;

    constructor(urlsStore: UrlsStore) {
        makeObservable(this);
        this._urlsStore = urlsStore;
    }

    @action
    public open = () => {
        this.isOpen = true;
    }

    @action
    public close = () => {
        this.isOpen = false;
    }

    @action
    public updateUrl(newUrl: string){
        this.targetUrl = newUrl;
    }

    @action
    public submit(){
        if(!this.targetUrl){
            return;
        }

        UrlsApi.create(this.targetUrl)
            .then(() => this.updateUrl(""))
            .finally(() => {
            this.close();
            this._urlsStore.reset()
        })
    }


}

