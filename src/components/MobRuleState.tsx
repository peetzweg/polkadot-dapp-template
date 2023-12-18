import { useMemo } from "react"
import { cn } from "../lib/utils.js"
import { useQueryMobRuleState } from "../queries/useQueryMobRuleState.js"
import { Textarea } from "./ui/textarea.js"

interface MobRuleStateProps {
  className?: string
}

export const MobRuleState: React.FC<MobRuleStateProps> = ({ className }) => {
  const { data: mobRuleCase } = useQueryMobRuleState()

  const { active, done } = useMemo(() => {
    return { active: mobRuleCase?.asOpen, done: mobRuleCase?.isDone }
  }, [mobRuleCase])

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
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Mob Rule Case
          </h2>
        </div>

        {!mobRuleCase ? (
          <div className="flex h-32 items-center justify-center">
            No case opened yet
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
