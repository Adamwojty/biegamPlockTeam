import { postMessage } from "../../../config/axios/service/postMessage"

export const postMsg = async obj => {
  try {
    await postMessage(obj)
    await console.log("sucess")
  } catch (err) {
    console.log(err)
  }
}
