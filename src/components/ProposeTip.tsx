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
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { formatBalance } from "../lib/formatBalance"

const ORIGIN_SMALL_TIPPER = new Uint8Array([22, 8])

const formSchema = z.object({
  sender: z.string(),
  receiver: z.string().min(2).max(50),
  amount: z.string(),
})

export const ProposeTip: React.FC = () => {
  const { currentAccount, injector } = useWeb3()
  const { api } = useApi()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "50",
    },
  })

  useEffect(() => {
    if (currentAccount?.address) {
      form.setValue("sender", currentAccount?.address)
    }
  }, [currentAccount?.address, form])

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = useCallback(
    ({ receiver, amount }) => {
      console.log({ receiver, amount })
      if (!api) throw new Error("api is not ready")
      if (!injector) throw new Error("injector is not ready")
      if (!currentAccount) throw new Error("currentAccount is not ready")

      const transferCall = api.tx.balances.transferKeepAlive(receiver, amount)
      console.log({ transferCall, callData: transferCall.toHex() })
      const referenda = api.tx.referenda.submit(
        ORIGIN_SMALL_TIPPER,
        { Inline: transferCall.toHex() },
        { After: 10 },
      )

      return referenda.signAndSend(currentAccount?.address, {
        signer: injector?.signer,
      })
    },
    [api, currentAccount, injector],
  )

  return (
    <div className="relative flex flex-col gap-4 rounded-md border p-6 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      <div className="space-y-2">
        <h3 className="text-3xl font-extrabold leading-6 tracking-tight">
          Propose OpenGov Tip
        </h3>
        <p className="text-sm text-muted-foreground">
          Create a proposal to tip a contributor.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-row items-baseline space-x-1 text-sm">
                  <FormMessage />
                </div>
                <div className="flex flex-row items-center justify-center gap-1">
                  <FormControl>
                    <ToggleGroup
                      type="single"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="rounded-md border p-1 font-mono"
                    >
                      <ToggleGroupItem value="50">50.00</ToggleGroupItem>
                      <ToggleGroupItem value="150">150.00</ToggleGroupItem>
                      <ToggleGroupItem value="250">250.00</ToggleGroupItem>
                    </ToggleGroup>
                  </FormControl>
                  <Button
                    variant="ghost"
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

          <div className="-mx-6 -mb-6 mt-4 flex flex-col gap-4 rounded-b-sm border-t border-dashed bg-muted p-6">
            <div className="flex flex-col items-end justify-end">
              <div className="relative pl-2 text-right font-mono text-sm italic">
                {form.watch("amount")}
              </div>
              <div className="relative flex w-1/2 justify-end border-t border-muted-foreground text-xs uppercase text-muted-foreground">
                Amount
              </div>
            </div>

            <div className="flex flex-col items-end justify-end">
              <div className="relative pl-2 text-right font-mono text-sm italic">
                {form.watch("receiver") ?? <div className="h-5" />}
              </div>
              <div className="relative flex w-full justify-start border-t border-muted-foreground text-xs uppercase text-muted-foreground">
                Receiver
              </div>
            </div>

            <div className="flex flex-col items-end justify-end">
              <div className="relative pl-2 text-right font-mono text-sm italic">
                {formatBalance(
                  api.consts.referenda.submissionDeposit.toBigInt(),
                )}
              </div>
              <div className="relative flex w-1/2 justify-end border-t border-muted-foreground text-xs uppercase text-muted-foreground">
                Required Deposit
              </div>
            </div>

            <div>
              <div className="relative pl-2 text-right font-mono text-sm italic">
                {currentAccount?.meta.name ?? currentAccount?.address ?? (
                  <div className="h-5" />
                )}
              </div>
              <div className="relative flex w-full justify-start border-t border-muted-foreground text-xs uppercase text-muted-foreground">
                Sign with
              </div>
            </div>
            <Button
              disabled={form.formState.isLoading || !form.formState.isValid}
              className={cn("transition-all", {
                "m-0 h-0 p-0": !form.formState.isValid,
              })}
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
