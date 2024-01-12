import { zodResolver } from "@hookform/resolvers/zod"
import { ShadowInnerIcon, UploadIcon } from "@radix-ui/react-icons"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useCallback, useMemo, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"
import { useExtrinsic } from "../lib/useExtrinsic.js"
import { cn } from "../lib/utils.js"
import { useApi } from "../providers/api-provider.js"
import { blake2AsU8a } from "@polkadot/util-crypto"
import { u8aToHex } from "@polkadot/util"
import {
  QUERY_KEY as QUERY_KEY_CANDIDATE_STATE,
  useQueryCandidateState,
} from "../queries/useQueryCandidateState.js"

import { useChain } from "../state/chains.js"
import { Button } from "./ui/button.js"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form.js"
import { Input } from "./ui/input.js"
import { AspectRatio } from "./ui/aspect-ratio.js"

// import "../interfaces/bulletin/augment-api.js"
// import "../interfaces/bulletin/augment-types"
interface EvidenceProps {
  className?: string
}

const formSchema = z.object({
  evidence: z.instanceof(FileList),
})

export const Evidence: React.FC<EvidenceProps> = ({ className }) => {
  const { api } = useApi()
  const { Bulletin } = useChain()
  const [file, setFile] = useState<File | undefined>(undefined)

  const queryClient = useQueryClient()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const { data: candidate } = useQueryCandidateState()

  const { data, isLoading } = useQuery({
    queryKey: ["Bulletin", "getBulletin"],
    queryFn: () => {
      return Bulletin.query.transactionStorage.authorizations.entries()
    },
  })
  console.log({ data, isLoading })

  const { mutateAsync: submitEvidence } = useExtrinsic(
    api.tx.proofOfInk.submitEvidence,
  )

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = useCallback(
    async ({ evidence }) => {
      if (evidence?.[0] === undefined) {
        throw new Error("No evidence provided")
      }

      // Task: Check if size is in limits
      // TODO: use value from Bulletin Allowance here
      if (evidence[0].size > 1e10) {
        throw new Error("File too large")
      }

      console.log({ evidence: evidence[0], type: evidence[0].type })

      // Task: get blake2 of file
      const buffer = await evidence[0].arrayBuffer()
      const bytes = new Uint8Array(buffer)

      // TODO: maybe this needs to be done in a service worker for bigger files?
      const blake2HashOfFile = u8aToHex(blake2AsU8a(bytes))

      // Task: Submit evidence bytes to bulletin chain

      // Task: submit hash of evidence to ProofOfInk
      return submitEvidence([blake2HashOfFile], {
        onSuccess: () => {
          void queryClient.invalidateQueries({
            queryKey: QUERY_KEY_CANDIDATE_STATE,
          })
        },
      })
    },
    [queryClient, submitEvidence],
  )

  const onChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files
    if (files?.[0]) {
      setFile(files[0])
    }
  }, [])

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

        {file && (
          <AspectRatio
            ratio={1 / 1}
            className="flex items-center justify-center overflow-hidden"
          >
            <img src={URL.createObjectURL(file)} />
          </AspectRatio>
        )}

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <input
            {...form.register("evidence")}
            onChange={onChange}
            accept="image/*"
            className="cursor-pointer"
            type="file"
          />

          {/* <div className="flex h-32 items-center justify-center gap-2 rounded border border-dashed">
              <FormField
                control={form.control}
                name="evidence"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        className="cursor-pointer"
                        type="file"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div> */}
          <Button
            type="submit"
            // disabled={
            //   form.formState.isLoading ||
            //   !form.formState.isValid ||
            //   form.formState.isSubmitting
            // }
          >
            Submit{" "}
            {form.formState.isSubmitting ? (
              <ShadowInnerIcon className="ml-2 animate-spin" />
            ) : (
              <UploadIcon className="ml-2" />
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
