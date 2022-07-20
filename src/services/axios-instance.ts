import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse, Axios } from 'axios'
import * as rax from 'retry-axios';

let axiosInstance: AxiosInstance;
export const getAxiosInstance = (): AxiosInstance => {
    if (!axiosInstance) {
        axiosInstance = axios.create();
        axios.defaults.raxConfig = {
            retry: 3,
            noResponseRetries: 3,
            httpMethodsToRetry: ['HEAD', 'OPTIONS', 'GET', 'POST', 'PUT', 'DELETE'],
            statusCodesToRetry: [[400], [429], [500], [502], [504]],
            backoffType: 'exponential',
            instance: axiosInstance,
            onRetryAttempt: (axiosError: AxiosError<unknown>) => {
                const retryConfig = rax.getConfig(axiosError);
                if (retryConfig?.currentRetryAttempt === retryConfig?.retry) {
                    console.log(axiosError, AxiosError);
                }
            }
        }
    }
    return axiosInstance
} 