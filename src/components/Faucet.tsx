import { Pencil1Icon } from "@radix-ui/react-icons"
import { useQuery, useQueryClient } from "@tanstack/react-query"
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
import { handleApiError } from "../lib/handleApiError.js"

const formSchema = z.object({
  receiver: z.string().min(2).max(50),
  value: z.string().min(1),
})

interface FaucetProps {
  className?: string
}

export const Faucet: React.FC<FaucetProps> = ({ className }) => {
  const { api, decimals, symbol } = useApi()
  const { keyring } = useKeyringStore()
  const queryClient = useQueryClient()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const pair = useMemo(() => {
    return keyring.createFromUri("//Alice")
  }, [keyring])

  const { data } = useQuery({
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
      return new Promise((resolve, reject) => {
        api.tx.balances
          .transferAllowDeath(receiver, scaledValue)
          .signAndSend(pair, (event) => {
            if (event.isCompleted) {
              resolve(event)
              void queryClient.invalidateQueries({
                queryKey: ["system.account"],
              })
            }
            if (event.isError) {
              reject(event)
            }
          })
          .catch((error) => {
            handleApiError(error)
            reject(error)
          })
      })
    },

    [decimals, api.tx.balances, pair, queryClient],
  )

  if (!pair) return null

  return (
    <div
      className={cn(
        "relative col-span-1 flex h-full w-auto flex-col gap-4 rounded-md border p-4 md:p-6 lg:p-6",
        className,
      )}
    >
      <>
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Faucet (Alice){" "}
          </h2>
          <h2 className="font-mono text-xl font-extrabold leading-6 tracking-tight">
            {data
              ? formatBalance(data.free.toBigInt(), { decimals, symbol })
              : "n/a"}
          </h2>
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
                        placeholder="0.10"
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

            <div>
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
