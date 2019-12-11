import { AxiosError } from "axios";
import {
    AppActions,
    LOGIN_USER,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
    LoginCredentials,
    REGISTER_USER,
    REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS,
    RegisterCredentials,
} from "../../../types/resume-client";

export function registerUser (
    user: RegisterCredentials
): AppActions<REGISTER_USER, RegisterCredentials> {
    return {
        type: REGISTER_USER,
        payload: user,
    };
}

export type RegisterUser = typeof registerUser;

export function registerUserFailed (
    error: AxiosError
): AppActions<REGISTER_USER_FAILED, AxiosError> {
    return {
        type: REGISTER_USER_FAILED,
        payload: error,
    };
}

export type RegisterUserFailed = typeof registerUserFailed;

export function registerUserSuccess (): AppActions<
    REGISTER_USER_SUCCESS,
    undefined
> {
    return {
        type: REGISTER_USER_SUCCESS,
        payload: undefined,
    };
}

export type RegisterUserSuccess = typeof registerUserSuccess;

export function loginUser (
    user: LoginCredentials
): AppActions<LOGIN_USER, LoginCredentials> {
    return {
        type: LOGIN_USER,
        payload: user,
    };
}

export type LoginUser = typeof loginUser;

export function loginUserFailed (
    error: AxiosError
): AppActions<LOGIN_USER_FAILED, AxiosError> {
    return {
        type: LOGIN_USER_FAILED,
        payload: error,
    };
}

export type LoginUserFailed = typeof loginUserFailed;

export function loginUserSuccess (): AppActions<LOGIN_USER_SUCCESS, undefined> {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: undefined,
    };
}

export type LoginUserSuccess = typeof loginUserSuccess;
