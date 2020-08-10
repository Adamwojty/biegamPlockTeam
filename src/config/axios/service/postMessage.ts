import AxiosInstance from "../index"
import { AxiosPromise } from "axios"

export const postMessage = (obj: string): AxiosPromise<any> => {
  return AxiosInstance.post(`/`, obj)
}
