import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"

import * as z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { Pencil1Icon } from "@radix-ui/react-icons"
import { useCallback } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { cn } from "../lib/utils"
import { useKeyringStore } from "../state/keyring"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  mnemonic: z
    .string()
    .min(2)
    .refine(
      (val) => {
        const wordCount = val.split(" ").length
        return wordCount === 12 || wordCount === 24
      },
      {
        message: "Seed Phrase should contain 12 or 24 words",
      },
    ),
})

export const ImportMnemonic: React.FC = () => {
  const { createFromMnemonic, create } = useKeyringStore()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = useCallback(
    ({ mnemonic }) => {
      createFromMnemonic(mnemonic, "Imported Seed")
    },
    [createFromMnemonic],
  )

  return (
    <div className="relative flex w-auto flex-col gap-6 rounded-md border p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-6 lg:p-6">
      <div className=" space-y-2">
        <h3 className="text-3xl font-extrabold leading-6 tracking-tight">
          Fresh Account
        </h3>
        <p className="mt-1 break-words font-mono text-sm text-gray-500">
          Create a blank account.
        </p>
        <div className="w-full">
          <Button
            className="justify-center"
            onClick={() => {
              create("Fresh Account")
            }}
          >
            Create
          </Button>
        </div>
      </div>

      <div className="relative -mx-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-3xl font-extrabold leading-6 tracking-tight">
          Import Seed Phrase
        </h3>
        <p className="mt-1 break-words font-mono text-sm text-gray-500">
          Enter your seed phrase to restore account.
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
            name="mnemonic"
            render={({ field }) => (
              <FormItem>
                <div className=" flex flex-row items-baseline space-x-1 text-sm">
                  <FormMessage />
                </div>
                <div className="flex flex-row items-center gap-1">
                  <FormControl>
                    <Textarea
                      autoCapitalize="off"
                      autoComplete="off"
                      className="font-mono"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                </div>
                <div>
                  <p className="font-mono text-sm text-muted-foreground">
                    bottom drive obey lake curtain smoke basket hold race lonely
                    fit walk
                  </p>
                </div>
              </FormItem>
            )}
          />

          <div className="-mx-4 -mb-4 mt-4 rounded-b-sm border-t border-dashed bg-muted p-4 md:-mx-6 md:-mb-6 md:p-6 lg:p-6">
            <Button
              disabled={form.formState.isLoading || !form.formState.isValid}
              className="float-right"
              type="submit"
            >
              Import
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
