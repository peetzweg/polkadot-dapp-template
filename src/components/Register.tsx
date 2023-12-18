import { PersonIcon } from "@radix-ui/react-icons"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { handleApiError } from "../lib/handleApiError.js"
import { cn } from "../lib/utils.js"
import { useApi } from "../providers/api-provider.js"
import { useQueryCandidateState } from "../queries/useQueryCandidateState.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"

interface RegisterProps {
  className?: string
}

export const Register: React.FC<RegisterProps> = ({ className }) => {
  const { api } = useApi()
  const { pair } = useKeyringStore()
  const queryClient = useQueryClient()

  const { data: candidate, isLoading } = useQueryCandidateState()

  const { mutate: apply, isPending } = useMutation({
    mutationKey: ["proofOfInk", "apply", pair?.address],
    mutationFn: () => {
      const applyCall = api.tx.proofOfInk.apply()

      return new Promise((resolve, reject) => {
        applyCall
          .signAndSend(pair!, (event) => {
            if (event.isCompleted) {
              void queryClient.invalidateQueries({ queryKey: ["proofOfInk"] })
              resolve(event)
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
    },
  })

  return (
    <div
      className={cn(
        "relative col-span-1 flex h-full w-auto flex-col gap-4 rounded-md border p-4 md:p-6 lg:p-6",
        className,
        {
          "pointer-events-none opacity-25": !candidate?.isProven,
          "outline-none ring-2 ring-ring ring-offset-2 ring-offset-background":
            candidate?.isProven,
        },
      )}
    >
      <>
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Register as Person
          </h2>
        </div>
        <div className="flex h-full flex-col  justify-center gap-4">
          <Button disabled={isPending}>
            Become a Person <PersonIcon className="ml-2" />
          </Button>
        </div>
      </>
    </div>
  )
}
