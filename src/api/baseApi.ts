import axios, {AxiosRequestConfig, AxiosPromise, AxiosInstance} from "axios";

export default class BaseAPI{

    private http: AxiosInstance;
    private baseUrl: string;
    protected _basePath: string; // tslint:disable-line

    constructor(baseUrl: string = "") {
        this.baseUrl = baseUrl;
        this._basePath = "";

        this.http = axios.create({
            baseURL: this.baseUrl
        });
    }

    protected get<T = any>(url: string, config: AxiosRequestConfig = {}, withToken?: boolean): AxiosPromise<T> {
        return this.request<T>({
            method: "get",
            url,
            ...config
        }, withToken);
    }

    protected post<T = any>(url: string, config: AxiosRequestConfig = {}, withToken?: boolean): AxiosPromise<T> {
        return this.request<T>({
            method: "post",
            url,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            ...config
        }, withToken);
    }

    protected request<T = any>(config: AxiosRequestConfig, withToken?: boolean): AxiosPromise<T> {
        return this.http.request(config);
    }
}
