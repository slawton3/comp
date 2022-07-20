import { AxiosResponse } from "axios";

export type AwaitedServiceResult<T> = AxiosResponse<AxiosResponse<T>>;
export type ServiceResult<T> = Promise<AwaitedServiceResult<T>>;