import AxiosInstance from "../index"
import { AxiosPromise } from "axios"

export function postMessage(obj: string): AxiosPromise<any> {
  return AxiosInstance.post(`/`, obj)
}
