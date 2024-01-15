import { zodResolver } from "@hookform/resolvers/zod"
import { BlendingModeIcon, ShadowInnerIcon } from "@radix-ui/react-icons"
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
import { useQueryDesignFamilies } from "../queries/useQueryDesignFamilies.js"
import { Button } from "./ui/button.js"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input.js"

interface CommitProps {
  className?: string
}

const formSchema = z.object({
  family: z.string().min(1).max(2),
  index: z
    .string()
    .min(1)
    .max(3)
    .refine((v) => !!Number(v), "Not a number")
    .refine(
      (v) => Number(v) >= 0 && Number(v) <= 255,
      "Should be between 0-255",
    ),
  personalId: z.coerce.number().gte(0).int().optional(),
})

export const Commit: React.FC<CommitProps> = ({ className }) => {
  const { api } = useApi()
  const queryClient = useQueryClient()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      family: "0",
    },
  })

  const { data: candidate } = useQueryCandidateState()
  const { data: designs, isLoading } = useQueryDesignFamilies()
  const { mutateAsync: commit } = useExtrinsic(api.tx.proofOfInk.commit)
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = useCallback(
    ({ family, index, personalId }) => {
      return commit(
        [
          { DesignedElective: [0, index] },
          personalId !== undefined ? Number(personalId) : null,
        ],
        {
          onSuccess: () => {
            void queryClient.invalidateQueries({
              queryKey: QUERY_KEY_CANDIDATE_STATE,
            })
          },
        },
      )
    },
    [commit, queryClient],
  )
  const { active, done } = useMemo(() => {
    return {
      active: !!candidate?.isApplied,
      done: !!candidate?.isSelected || !!candidate?.isProven,
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
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Commit to a Tattoo
          </h2>
          <code>ProofOfInk::commit(choice)</code>
        </div>

        {isLoading ? null : designs?.length === 0 ? (
          "No designs available yet"
        ) : (
          <Form {...form}>
            <form
              // TODO type error of react-hook-forms?
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 flex h-full flex-col justify-center gap-4"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <FormField
                  control={form.control}
                  name="family"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          autoCapitalize="off"
                          autoComplete="off"
                          className="text-right font-mono tabular-nums"
                          placeholder="Family"
                          disabled
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div>/</div>
                <FormField
                  control={form.control}
                  name="index"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          autoCapitalize="off"
                          autoComplete="off"
                          placeholder="Index"
                          className="font-mono"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <FormField
                  control={form.control}
                  name="personalId"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          autoCapitalize="off"
                          autoComplete="off"
                          placeholder="Personal ID"
                          className="font-mono"
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
                Commit{" "}
                {form.formState.isSubmitting ? (
                  <ShadowInnerIcon className="ml-2 animate-spin" />
                ) : (
                  <BlendingModeIcon className="ml-2" />
                )}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  )
}
