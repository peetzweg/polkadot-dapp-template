import toast from "react-hot-toast"

export const handleApiError = (error: unknown) => {
  if (error["message"]) {
    toast.error(error["message"], { position: "bottom-center" })
  } else if (error["name"]) {
    toast.error(error["name"], { position: "bottom-center" })
  } else {
    toast.error("Unkown Error during submit of Extrinsic", {
      position: "bottom-center",
    })
  }
  console.error(error)
}
