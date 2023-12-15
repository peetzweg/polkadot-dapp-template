import { Pencil1Icon } from "@radix-ui/react-icons"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { SubmitHandler } from "react-hook-form"
import { formatBalance } from "../lib/formatBalance.js"
import { useApi } from "../providers/api-provider.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"

import * as z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowDownIcon } from "@radix-ui/react-icons"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { cn } from "../lib/utils"

const formSchema = z.object({
  receiver: z.string().min(2).max(50),
  value: z.string().min(1),
})
export const Faucet: React.FC = () => {
  const { api, decimals, symbol } = useApi()
  const { keyring } = useKeyringStore()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const pair = useMemo(() => {
    return keyring.createFromUri("//Alice")
  }, [keyring])

  const { data, refetch } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["system.account", pair?.address],
    queryFn: async () => {
      return (await api.query.system.account(pair.address)).data
    },
    enabled: !!pair,
  })

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = useCallback(
    async ({ receiver, value }) => {
      // TODO! unsave scaling, can overflow and not work with to many decimals
      const scaledValue = Number(value) * 10 ** decimals

      await api.tx.balances
        .transferAllowDeath(receiver, scaledValue)
        .signAndSend(pair)

      return refetch()
    },
    [decimals, api.tx.balances, pair, refetch],
  )

  if (!pair) return null

  return (
    <div className="relative flex w-auto flex-col gap-4 rounded-md border p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-6 lg:p-6">
      <>
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Faucet
          </h2>
          <p className="mt-1 break-all font-mono text-sm text-gray-500">
            {pair.address}
          </p>
        </div>

        <div className="flex flex-row justify-around">
          <div className="flex flex-1 flex-col items-end justify-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
            <div className="text-2xl font-bold tabular-nums">
              {data ? formatBalance(data.free.toBigInt(), { decimals }) : "n/a"}
            </div>
            <p className="text-xs text-muted-foreground">Free</p>
          </div>
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
                      {symbol}
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
              <Button
                disabled={
                  form.formState.isLoading ||
                  !form.formState.isValid ||
                  form.formState.isSubmitting
                }
                className="float-right"
                type="submit"
              >
                Transfer
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
      </>
    </div>
  )
}
