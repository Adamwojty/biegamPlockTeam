interface EncodeInterface {
  "form-name": string
  name: string
  email: string
  message: string
}

export const encode = (data: EncodeInterface) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
