import { Button } from "../ui/button"
import { Form } from "../ui/form"

import * as z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { Pencil1Icon } from "@radix-ui/react-icons"
import { useCallback, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { cn } from "../../lib/utils"

const formSchema = z.object({})

interface ApplyProps {
  onSuccess?: () => void
}

export const Commit: React.FC<ApplyProps> = ({ onSuccess }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const [design, setDesign] = useState<undefined | number>(undefined)

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> =
    useCallback(async () => {
      // TODO ProofOfInk::commit(signed(1), InkChoice::DesignedElective(0, 0), None)

      // api.tx.balances
      //   .transferAllowDeath(receiver, scaledValue)
      //   .signAndSend(currentAccount!.address, { signer: injector!.signer })

      await new Promise((resolve) => setTimeout(resolve, 2000))
      if (onSuccess) onSuccess()
    }, [onSuccess])

  return (
    <div className="w-max-[960px] relative flex w-auto flex-col space-y-2 rounded-md border p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-6 lg:p-6">
      <h4>Commit</h4>
      <p>Select a tattoo you would like to get</p>

      <Form {...form}>
        <form
          // TODO type error of react-hook-forms?
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-3 items-center justify-center gap-4">
            {new Array(9).fill(1).map((_, index) => (
              <div
                key={`tattoo_${index}`}
                className={cn(
                  "flex aspect-square  w-full cursor-pointer items-center justify-center border-2 border-solid border-transparent",
                  {
                    "border-pink-500": design === index,
                  },
                )}
                onClick={() => setDesign(index)}
              >
                <img
                  className="aspect-square w-32"
                  src={`/entropretty0${index + 1}.png`}
                />
              </div>
            ))}
          </div>
          <div className="-mx-4 -mb-4 mt-4 rounded-b-sm border-t border-dashed bg-muted p-4 md:-mx-6 md:-mb-6 md:p-6 lg:p-6">
            <div className="relative break-all px-2 text-right font-mono text-sm uppercase italic">
              {
                "I hereby commit to get the tattoo I selected above in the next 2 weeks."
              }
            </div>
            <div className="relative flex w-full justify-start border-t border-muted-foreground text-xs uppercase text-muted-foreground" />

            <Button
              disabled={form.formState.isLoading || design === undefined}
              className="float-right"
              type="submit"
            >
              Commit
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
