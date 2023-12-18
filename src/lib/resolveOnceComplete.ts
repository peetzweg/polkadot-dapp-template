import {
  AddressOrPair,
  ApiTypes,
  SubmittableExtrinsic,
} from "@polkadot/api/types"
import { handleApiError } from "./handleApiError"

export default <T extends ApiTypes>(
  call: SubmittableExtrinsic<T>,
  addressOrPair: AddressOrPair,
) =>
  new Promise((resolve, reject) => {
    call
      .signAndSend(addressOrPair, (event) => {
        if (event.isCompleted) {
          resolve(event)
          void queryClient.invalidateQueries({
            queryKey: ["system.account"],
          })
        }
        if (event.isError) {
          reject(event)
        }
      })
      .catch((error) => {
        handleApiError(error)
        reject(error)
      })
  })
