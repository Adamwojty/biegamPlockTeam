import { postMessage } from "../../../config/axios/service/postMessage"

export const postMsg = async (obj: string) => {
  try {
    await postMessage(obj)
  } catch (err) {
    console.log(err)
  }
}
