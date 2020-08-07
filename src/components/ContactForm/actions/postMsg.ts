import { postMessage } from "../../../config/axios/service/postMessage"

export const postMsg = async obj => {
  try {
    await postMessage(obj)
  } catch (err) {
    console.log(err)
  }
}
