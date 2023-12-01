import { useApi } from "../providers/api-provider"
import { useWeb3 } from "../providers/web3-provider"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"

import * as z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowDownIcon, Pencil1Icon } from "@radix-ui/react-icons"
import { useCallback, useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { cn } from "../lib/utils"

const formSchema = z.object({
  sender: z.string().min(2).max(50),
  receiver: z.string().min(2).max(50),
  value: z.string().min(1),
})

export const TransferValue: React.FC = () => {
  const { currentAccount, injector } = useWeb3()
  const { api } = useApi()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    if (currentAccount?.address) {
      form.setValue("sender", currentAccount?.address)
    }
  }, [currentAccount?.address, form])

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = useCallback(
    ({ receiver, value }) => {
      return api.tx.balances
        .transferAllowDeath(receiver, value)
        .signAndSend(currentAccount!.address, { signer: injector!.signer })
    },
    [api, currentAccount, injector],
  )

  return (
    <div className="relative flex w-auto flex-col space-y-2 rounded-md border p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-6 lg:p-6">
      <div className="space-y-2">
        <h3 className="text-3xl font-extrabold leading-6 tracking-tight">
          Transfer
        </h3>
        <p className="mt-1 break-words font-mono text-sm text-gray-500">
          Send an amount of your native tokens to the destination account.
        </p>
      </div>

      <Form {...form}>
        <form
          // TODO type error of react-hook-forms?
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem>
                <div className=" flex flex-row items-baseline space-x-1 text-sm">
                  <FormMessage />
                </div>
                <div className="flex flex-row items-center gap-1">
                  <FormControl>
                    <Input
                      autoCapitalize="off"
                      autoComplete="off"
                      className="text-right font-mono tabular-nums"
                      placeholder="10.00"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    variant="secondary"
                    className="pointer-events-none px-3 shadow-none"
                  >
                    DOT
                  </Button>
                </div>
              </FormItem>
            )}
          />
          <div className="relative">
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                <ArrowDownIcon />
              </span>
            </div>
          </div>

          <FormField
            control={form.control}
            name="receiver"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    autoCapitalize="off"
                    autoComplete="off"
                    placeholder="Destination"
                    className="font-mono"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="-mx-4 -mb-4 mt-4 rounded-b-sm border-t border-dashed bg-muted p-4 md:-mx-6 md:-mb-6 md:p-6 lg:p-6">
            <div className="relative break-all px-2 text-right font-mono text-sm uppercase italic">
              {currentAccount?.meta.name ?? currentAccount?.address}
            </div>
            <div className="relative flex w-full justify-start border-t border-muted-foreground text-xs uppercase text-muted-foreground">
              Sign with
            </div>
            <Button
              disabled={form.formState.isLoading || !form.formState.isValid}
              className="float-right"
              type="submit"
            >
              Submit
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
