import { useMemo } from "react"
import { cn } from "../lib/utils.js"
import { useQueryMobRuleState } from "../queries/useQueryMobRuleState.js"
import { Textarea } from "./ui/textarea.js"
import { useQueryCandidateState } from "../queries/useQueryCandidateState.js"
import { useApi } from "../providers/api-provider.js"
import { u8aToHex } from "@polkadot/util"

interface MobRuleStateProps {
  className?: string
}

export const MobRuleState: React.FC<MobRuleStateProps> = ({ className }) => {
  const { api } = useApi()
  const { data: candidate } = useQueryCandidateState()
  const { data: mobRuleCase } = useQueryMobRuleState()

  const judgingId = useMemo(() => {
    if (!candidate?.isSelected || candidate?.asSelected.judging.isNone) return
    return candidate?.asSelected.judging.unwrap().toNumber()
  }, [candidate])

  const { active, done } = useMemo(() => {
    return { active: mobRuleCase?.isOpen, done: mobRuleCase?.isDone }
  }, [mobRuleCase])

  const interveneCall = useMemo(() => {
    if (judgingId === undefined) return undefined
    return u8aToHex(
      api.tx.mobRule.intervene(judgingId, { Truth: "ConfidentTrue" }).toU8a(),
    )
  }, [api.tx.mobRule, judgingId])

  return (
    <div
      className={cn(
        "relative col-span-1 flex h-full w-auto flex-col gap-4 rounded-md border p-4 md:p-6 lg:p-6",
        className,
        {
          "pointer-events-none opacity-25": done ?? !active,
          "outline-none ring-2 ring-ring ring-offset-2 ring-offset-background":
            active,
        },
      )}
    >
      <>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Mob Rule Case
          </h2>
          <code>MobRule::cases(case_no)</code>
          {judgingId && <code>{`Case: ${judgingId}`}</code>}
          {interveneCall && <code>{`Intervene: ${interveneCall}`}</code>}
        </div>

        {!mobRuleCase ? (
          <div className="flex h-32 items-center justify-center">
            No case open.
          </div>
        ) : mobRuleCase?.isOpen ? (
          <div>
            <p>
              Confident True:{" "}
              {mobRuleCase.asOpen.tally.confidentTrue.toNumber()}
            </p>
            <p>Probable: {mobRuleCase.asOpen.tally.probable.toNumber()}</p>
            <p>Cannot Say: {mobRuleCase.asOpen.tally.cannotSay.toNumber()}</p>
            <p>
              Confident False:{" "}
              {mobRuleCase.asOpen.tally.confidentFalse.toNumber()}
            </p>
            <p>Contempt: {mobRuleCase.asOpen.tally.contempt.toNumber()}</p>
          </div>
        ) : (
          <div>
            <Textarea
              disabled
              rows={5}
              value={JSON.stringify(mobRuleCase, undefined, 2)}
            />
          </div>
        )}
      </>
    </div>
  )
}
