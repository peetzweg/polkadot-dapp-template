import { zodResolver } from "@hookform/resolvers/zod"
import { ShadowInnerIcon, UploadIcon } from "@radix-ui/react-icons"
import { useQueryClient } from "@tanstack/react-query"
import { useCallback, useMemo } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"
import { useExtrinsic } from "../lib/useExtrinsic.js"
import { cn } from "../lib/utils.js"
import { useApi } from "../providers/api-provider.js"
import {
  QUERY_KEY as QUERY_KEY_CANDIDATE_STATE,
  useQueryCandidateState,
} from "../queries/useQueryCandidateState.js"

import { Button } from "./ui/button.js"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form.js"
import { Input } from "./ui/input.js"

interface EvidenceProps {
  className?: string
}

const formSchema = z.object({
  evidence: z.any(),
})

export const Evidence: React.FC<EvidenceProps> = ({ className }) => {
  const { api } = useApi()

  const queryClient = useQueryClient()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const { data: candidate } = useQueryCandidateState()
  const { mutateAsync: submitEvidence } = useExtrinsic(
    api.tx.proofOfInk.submitEvidence,
  )

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = useCallback(
    ({ evidence }) => {
      // eslint-disable-next-line no-console
      console.log({ uploaded: evidence })
      const DEADBEEF =
        "0xDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEF"

      return submitEvidence([DEADBEEF], {
        onSuccess: () => {
          void queryClient.invalidateQueries({
            queryKey: QUERY_KEY_CANDIDATE_STATE,
          })
        },
      })
    },
    [queryClient, submitEvidence],
  )

  const { active, done } = useMemo(() => {
    return {
      active:
        candidate?.isSelected &&
        candidate.asSelected.judging.isNone &&
        !candidate.isProven,
      done:
        !!(candidate?.isSelected && candidate.asSelected.judging.isSome) ||
        !!candidate?.isProven,
    }
  }, [candidate])

  return (
    <div
      className={cn(
        "relative col-span-1 flex h-full w-auto flex-col gap-4 rounded-md border p-4 md:p-6 lg:p-6",
        className,
        {
          "pointer-events-none opacity-25": !!done || !active,
          "outline-none ring-2 ring-ring ring-offset-2 ring-offset-background":
            active,
        },
      )}
    >
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Submit Evidence
          </h2>
          <code>ProofOfInk::submit_evidence(hash)</code>
        </div>

        <Form {...form}>
          <form
            // TODO type error of react-hook-forms?
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex h-32 items-center justify-center gap-2 rounded border border-dashed">
              <FormField
                control={form.control}
                name="evidence"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="cursor-pointer"
                        type="file"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              disabled={
                form.formState.isLoading ||
                !form.formState.isValid ||
                form.formState.isSubmitting
              }
            >
              Submit{" "}
              {form.formState.isSubmitting ? (
                <ShadowInnerIcon className="ml-2 animate-spin" />
              ) : (
                <UploadIcon className="ml-2" />
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
