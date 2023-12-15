import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { cn } from "../lib/utils.js"
import { useApi } from "../providers/api-provider.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"

interface ApplyProps {
  className?: string
}

export const Apply: React.FC<ApplyProps> = ({ className }) => {
  const { api } = useApi()
  const { pair } = useKeyringStore()
  const queryClient = useQueryClient()

  const { data } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["proofOfInk", "candidates", pair?.address],
    queryFn: async () => {
      const state = await api.query.proofOfInk.candidates(pair!.address)
      if (state.isNone) return undefined

      return state.unwrap()
    },
    enabled: !!pair,
  })

  const { mutate: apply, isPending } = useMutation({
    mutationKey: ["proofOfInk", "apply", pair?.address],
    mutationFn: () => {
      const applyCall = api.tx.proofOfInk.apply()
      return applyCall.signAndSend(pair!, (event) => {
        // TODO resolve here a new promise, so it's pending till isComplete
        if (event.isCompleted) {
          void queryClient.invalidateQueries({ queryKey: ["proofOfInk"] })
        }
      })
    },
  })

  return (
    <div
      className={cn(
        "relative col-span-1 flex h-full w-auto flex-col gap-4 rounded-md border p-4 md:p-6 lg:p-6",
        className,
        {
          "pointer-events-none opacity-25": data !== undefined,
          "outline-none ring-2 ring-ring ring-offset-2 ring-offset-background":
            data === undefined,
        },
      )}
    >
      <>
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Apply for Polkadot Citizenship
          </h2>
        </div>

        <Button variant={"ghost"} disabled>
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
        </Button>
      </>
    </div>
  )
}
