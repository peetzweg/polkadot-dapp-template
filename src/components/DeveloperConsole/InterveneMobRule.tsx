import { Button } from "@/components/ui/button.js"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAliceKeyPair } from "@/hooks/useAliceKeyPair.js"
import { useExtrinsicAs } from "@/lib/useExtrinsic.js"
import { useChain } from "@/state/chains.js"
import { zodResolver } from "@hookform/resolvers/zod"
import { ShadowInnerIcon } from "@radix-ui/react-icons"
import { useCallback } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"

const XCM_PEOPLE_DESTINATION = {
  V3: { parents: 0, interior: { X1: { Parachain: 1004 } } },
}

const createXCMTransactSuperuser = (encodedCall: string) => ({
  V3: [
    { UnpaidExecution: { weightLimit: "Unlimited" } },
    {
      Transact: {
        originKind: "Superuser",
        requireWeightAtMost: { refTime: 40000000000n, proofSize: 900000n },
        call: {
          encoded: encodedCall,
        },
      },
    },
  ],
})

const formSchema = z.object({
  caseIndex: z
    .string()
    .min(1)
    .max(3)
    .refine((v) => !!Number(v), "Not a number")
    .refine(
      (v) => Number(v) >= 0 && Number(v) <= 255,
      "Should be between 0-255",
    ),
})

export const InterveneMobRule: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  const { Rococo, People } = useChain()

  const aliceKeyPair = useAliceKeyPair()
  const { mutateAsync: sudo } = useExtrinsicAs(
    Rococo.api.tx.sudo.sudo,
    aliceKeyPair,
  )
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = useCallback(
    ({ caseIndex }) => {
      const addDesignFamily = People.api.tx.mobRule.intervene(caseIndex, {
        Truth: "ConfidentTrue",
      })
      const message = createXCMTransactSuperuser(addDesignFamily.method.toHex())
      const sendXcm = Rococo.api.tx.xcmPallet.send(
        XCM_PEOPLE_DESTINATION,
        message,
      )
      sudo([sendXcm])
    },
    [People.api.tx.mobRule, Rococo.api.tx.xcmPallet, sudo],
  )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex w-full flex-row items-center gap-4"
      >
        <div className="flex flex-row items-center justify-center gap-2">
          <FormField
            control={form.control}
            name="caseIndex"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    autoCapitalize="off"
                    autoComplete="off"
                    className="text-right font-mono tabular-nums"
                    placeholder="Case Index"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button
          className="w-1/2"
          type="submit"
          disabled={
            form.formState.isLoading ||
            !form.formState.isValid ||
            form.formState.isSubmitting
          }
        >
          Intervene{" "}
          {form.formState.isSubmitting && (
            <ShadowInnerIcon className="ml-2 animate-spin" />
          )}
        </Button>
      </form>
    </Form>
  )
}