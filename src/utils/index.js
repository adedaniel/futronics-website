import axios from "axios"

export const fetchLocation = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://ipapi.co/json/")
      .then(({ data }) => {
        resolve(data)
      })
      .catch(() => {
        reject(Error("Failed to connect."))
      })
  })
}
export const separateWithComma = number => {
  return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
}
