import { Button } from "../ui/button"
import { Form } from "../ui/form"

import * as z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { UploadIcon } from "@radix-ui/react-icons"
import { useCallback } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { cn } from "../../lib/utils"

const formSchema = z.object({})

interface ApplyProps {
  onSuccess?: () => void
}

export const SubmitEvidence: React.FC<ApplyProps> = ({ onSuccess }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> =
    useCallback(async () => {
      // TODO upload to bulletin chain
      // TODO set hash via => ProofOfInk::submit_evidence(signed(1), [1; 32])

      // api.tx.balances
      //   .transferAllowDeath(receiver, scaledValue)
      //   .signAndSend(currentAccount!.address, { signer: injector!.signer })

      await new Promise((resolve) => setTimeout(resolve, 2000))
      if (onSuccess) onSuccess()
    }, [onSuccess])

  return (
    <div className="w-max-[960px] relative flex w-auto flex-col space-y-2 rounded-md border p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-6 lg:p-6">
      <h4>Submit Evidence</h4>
      <p>Upload the video evidence of your tattoo</p>

      <Form {...form}>
        <form
          // TODO type error of react-hook-forms?
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-3 items-center justify-center gap-4">
            <h3>select file</h3>
          </div>
          <div className="-mx-4 -mb-4 mt-4 rounded-b-sm border-t border-dashed bg-muted p-4 md:-mx-6 md:-mb-6 md:p-6 lg:p-6">
            <div className="relative break-all px-2 text-right font-mono text-sm uppercase italic">
              Submit Evidence
            </div>
            <div className="relative flex w-full justify-start border-t border-muted-foreground text-xs uppercase text-muted-foreground">
              Sign with
            </div>

            <Button
              disabled={form.formState.isLoading}
              className="float-right"
              type="submit"
            >
              Upload
              <UploadIcon
                className={cn([
                  "ml-2 transition-transform",
                  { "m-0 w-0": !form.formState.isValid },
                ])}
              />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
