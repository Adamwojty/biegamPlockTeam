import AxiosInstance from "../index"
import { AxiosPromise } from "axios"

export function postMsg(obj): AxiosPromise<any> {
  return AxiosInstance.post(`/`, obj)
}
