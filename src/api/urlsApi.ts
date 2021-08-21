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
                url: "/",
                params: {
                    url: domain
                }
            }
        )
    }
}

export default new UrlsApi("http://localhost:8080")
