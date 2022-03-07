import axios, { AxiosRequestConfig } from "axios";

export default function requester(config: AxiosRequestConfig) {
    return axios(config);
}
