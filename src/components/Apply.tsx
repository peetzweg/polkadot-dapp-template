import { ShadowInnerIcon } from "@radix-ui/react-icons"
import { useQueryClient } from "@tanstack/react-query"
import { useCallback, useMemo } from "react"
import { useExtrinsic } from "../lib/useExtrinsic.js"
import { cn } from "../lib/utils.js"
import { useApi } from "../providers/api-provider.js"
import {
  QUERY_KEY,
  useQueryCandidateState,
} from "../queries/useQueryCandidateState.js"
import { Button } from "./ui/button.js"
import { useQuery } from "@tanstack/react-query"

interface ApplyProps {
  className?: string
}

export const Apply: React.FC<ApplyProps> = ({ className }) => {
  const { api } = useApi()
  const queryClient = useQueryClient()

  const { data, isLoading } = useQueryCandidateState()

  const { mutateAsync: apply, isPending } = useExtrinsic(
    api.tx.proofOfInk.apply,
  )
  const onClick = useCallback(() => {
    apply([], {
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: QUERY_KEY,
        }),
    })
  }, [apply, queryClient])

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
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Apply for Citizenship
          </h2>
          <code>ProofOfInk::apply()</code>
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

          <Button disabled={isPending} onClick={onClick}>
            With <code className="pl-1">DOT</code>
            {isPending && <ShadowInnerIcon className="ml-2 animate-spin" />}
          </Button>
        </div>
      </>
    </div>
  )
}
