import { useApi } from "../../providers/api-provider"
import { useWeb3 } from "../../providers/web3-provider"
import { Button } from "./../ui/button"
import { Form } from "./../ui/form"

import * as z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { Pencil1Icon } from "@radix-ui/react-icons"
import { useCallback } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { cn } from "../../lib/utils"

const formSchema = z.object({})

interface ApplyProps {
  onSuccess?: () => void
}

export const Apply: React.FC<ApplyProps> = ({ onSuccess }) => {
  const { currentAccount, injector } = useWeb3()
  const { api } = useApi()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> =
    useCallback(async () => {
      // TODO ProofOfInk::apply(signed(k_new))

      // api.tx.balances
      //   .transferAllowDeath(receiver, scaledValue)
      //   .signAndSend(currentAccount!.address, { signer: injector!.signer })

      await new Promise((resolve) => setTimeout(resolve, 2000))
      if (onSuccess) onSuccess()
    }, [onSuccess])

  return (
    <div className="relative flex w-auto flex-col space-y-2 rounded-md border p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-6 lg:p-6">
      <h4>Process</h4>

      <div>
        1. Apply for a tattoo design. <br />
        2. Get a tattoo. <br />
        3. Submit evidence. <br />
        4. Get citizenship.
      </div>

      <Form {...form}>
        <form
          // TODO type error of react-hook-forms?
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="-mx-4 -mb-4 mt-4 rounded-b-sm border-t border-dashed bg-muted p-4 md:-mx-6 md:-mb-6 md:p-6 lg:p-6">
            <div className="relative break-all px-2 text-right font-mono text-sm uppercase italic">
              {currentAccount?.meta.name ?? currentAccount?.address}
            </div>
            <div className="relative flex w-full justify-start border-t border-muted-foreground text-xs uppercase text-muted-foreground">
              Sign with
            </div>
            <Button
              disabled={form.formState.isLoading}
              className="float-right"
              type="submit"
            >
              Apply
              <Pencil1Icon
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
