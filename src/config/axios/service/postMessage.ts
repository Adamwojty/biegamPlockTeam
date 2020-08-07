import AxiosInstance from "../index"
import { AxiosPromise } from "axios"

export function postMessage(obj): AxiosPromise<any> {
  return AxiosInstance.post(`/`, obj)
}
