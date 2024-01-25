/* eslint-disable no-console */
import { Pencil1Icon, ShadowInnerIcon } from "@radix-ui/react-icons"
import { useQueryClient } from "@tanstack/react-query"
import { SubmitHandler } from "react-hook-form"
import { formatBalance } from "../lib/formatBalance.js"
import { useApi } from "../providers/api-provider.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form.js"
import { Input } from "./ui/input.js"

import * as z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowDownIcon } from "@radix-ui/react-icons"
import { useCallback, useMemo } from "react"
import { useForm } from "react-hook-form"
import { useExtrinsicAs } from "../lib/useExtrinsic.js"
import { cn } from "../lib/utils.js"
import {
  QUERY_KEY as ACCOUNT_QUERY_KEY,
  useQueryAccount,
} from "../hooks/useQueryAccount.js"

const formSchema = z.object({
  receiver: z.string().min(2).max(50),
  value: z.string().min(1),
})

interface FaucetProps {
  className?: string
}

export const Faucet: React.FC<FaucetProps> = ({ className }) => {
  const { api, decimals, symbol } = useApi()
  const { keyring, pair: currentPair } = useKeyringStore()
  const queryClient = useQueryClient()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: "0.05",
      receiver: currentPair?.address,
    },
  })

  const aliceKeyPair = useMemo(() => {
    return keyring.createFromUri("//Alice")
  }, [keyring])

  const { data } = useQueryAccount(aliceKeyPair.address)

  const { mutateAsync: transfer } = useExtrinsicAs(
    api.tx.balances.transferAllowDeath,
    aliceKeyPair,
  )

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = useCallback(
    async ({ receiver, value }) => {
      // TODO! unsave scaling, can overflow and not work with to many decimals
      const scaledValue = Number(value) * 10 ** decimals

      return transfer([receiver, scaledValue], {
        onSuccess: () => {
          void queryClient.invalidateQueries({
            queryKey: ACCOUNT_QUERY_KEY,
          })
        },
      })
    },

    [decimals, queryClient, transfer],
  )

  if (!currentPair) return null

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
            Faucet (Alice)
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
                        disabled
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
                      placeholder="Receiver"
                      className="font-mono"
                      {...field}
                      disabled
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
                {form.formState.isSubmitting ? (
                  <ShadowInnerIcon className="ml-2 animate-spin" />
                ) : (
                  <Pencil1Icon
                    className={cn([
                      "ml-2 transition-transform",
                      { "m-0 w-0": !form.formState.isValid },
                    ])}
                  />
                )}
              </Button>
            </div>
          </form>
        </Form>
      </>
    </div>
  )
}
