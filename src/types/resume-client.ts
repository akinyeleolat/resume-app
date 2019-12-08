import { AxiosPromise, AxiosRequestConfig } from "axios";
import { Action } from "redux";

export interface AppActions<T = string, P = any> extends Action {
    type: T;
    payload: P;
}

export type RequestMethod = <T = any>(
    config: AxiosRequestConfig
) => AxiosPromise<T>;

export interface UserState {
    id: string;
    email: string;
    name: string;
    lastName: string;
    token: string;
}

export interface AppState {
    user: UserState;
}

export interface RegisterCredentials {
    email: string;
    name: string;
    middleName: string;
    lastName: string;
    secondLastName: string;
    password: string;
    password2: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface PostMethod {
    <T, P>(url: string, data: T, config?: AxiosRequestConfig): AxiosPromise<
        P
    >;
}

export const REGISTER_USER = "user/register";
export type REGISTER_USER = typeof REGISTER_USER;
export const LOGIN_USER = "user/login";
export type LOGIN_USER = typeof LOGIN_USER;
