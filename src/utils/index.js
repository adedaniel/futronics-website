import axios from "axios"

export const fetchLocation = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://api.geoapify.com/v1/ipinfo?apiKey=da5eda2b65364ea5a92e8ef0742b2f5d"
      )
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

export const statesInNigeria = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
]
