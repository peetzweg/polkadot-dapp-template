import { useMutation, useQueryClient } from "@tanstack/react-query"
import { handleApiError } from "../lib/handleApiError.js"
import { cn } from "../lib/utils.js"
import { useApi } from "../providers/api-provider.js"
import { useQueryCandidateState } from "../queries/useQueryCandidateState.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"
import { CheckCircledIcon, ShadowInnerIcon } from "@radix-ui/react-icons"
import { useMemo } from "react"

interface ApplyProps {
  className?: string
}

export const Apply: React.FC<ApplyProps> = ({ className }) => {
  const { api } = useApi()
  const { pair } = useKeyringStore()
  const queryClient = useQueryClient()

  const { data, isLoading } = useQueryCandidateState()

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

  const { active, done } = useMemo(() => {
    return { done: data !== undefined, active: data === undefined && isLoading }
  }, [data, isLoading])

  return (
    <div
      className={cn(
        "relative col-span-1 flex h-full w-auto flex-col gap-4 rounded-md border p-4 md:p-6 lg:p-6",
        className,
        {
          "pointer-events-none opacity-25": done,
          "outline-none ring-2 ring-ring ring-offset-2 ring-offset-background":
            active,
        },
      )}
    >
      <>
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Apply for Citizenship
          </h2>
        </div>
        <div className="flex h-full flex-col  justify-center gap-4">
          <Button variant={"secondary"} disabled>
            With Ticket
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button disabled={isPending} onClick={() => apply()}>
            With <code className="pl-1">DOT</code>
            {isPending && <ShadowInnerIcon className="ml-2 animate-spin" />}
          </Button>
        </div>
      </>
    </div>
  )
}
