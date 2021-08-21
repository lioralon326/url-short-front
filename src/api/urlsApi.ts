import BaseAPI from "./baseApi";


class UrlsApi extends BaseAPI {
    public getAll() {
        return this.request({
            method: "get",
            url: "/",
        });
    }

    public create(domain: string) {
        return this.request({
                method: "post",
                url: `/${domain}`,
            }
        )
    }
}

export default new UrlsApi(process.env.baseApi || "http://localhost:8080")
