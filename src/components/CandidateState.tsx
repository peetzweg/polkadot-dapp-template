import { useState } from "react"
import { cn } from "../lib/utils.js"
import { useQueryCandidateState } from "../queries/useQueryCandidateState.js"
import { useQueryMobRuleState } from "../queries/useQueryMobRuleState.js"
import { Checkbox } from "./ui/checkbox.js"
import { Textarea } from "./ui/textarea.js"
import { Button } from "./ui/button.js"

interface CandidateStateProps {
  className?: string
}

export const CandidateState: React.FC<CandidateStateProps> = ({
  className,
}) => {
  const [showRaw, setRaw] = useState(false)
  const { data: candidate } = useQueryCandidateState()
  const { data: mobRuleCase } = useQueryMobRuleState()

  return (
    <div
      className={cn(
        "relative col-span-1 flex h-full w-auto flex-col gap-4 rounded-md border p-4 md:p-6 lg:p-6",
        className,
      )}
    >
      <>
        <div className="flex flex-row items-center justify-between ">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Candidate State
          </h2>
          <Button variant={"ghost"} onClick={() => setRaw((prev) => !prev)}>
            Show Raw
          </Button>
        </div>

        {showRaw ? (
          <div>
            <Textarea
              rows={10}
              disabled
              value={JSON.stringify(candidate, undefined, 2)}
            />
          </div>
        ) : (
          <>
            <Step
              done={candidate !== undefined}
              active={candidate === undefined}
              label="Apply for citizenship"
              description="Use voucher or pay dot"
            />

            <Step
              done={candidate && (candidate.isSelected || candidate.isProven)}
              active={candidate && candidate.isApplied}
              label="Commit to a Tattoo"
              description="Select a Tattoo you want to get"
            />

            <Step
              active={
                candidate?.isSelected && candidate.asSelected.judging.isNone
              }
              done={
                !!(
                  candidate?.isSelected && candidate.asSelected.judging.isSome
                ) || candidate?.isProven
              }
              label="Submit Evidence"
              description="Upload a video of you getting the tattoo"
            />

            <Step
              done={!!mobRuleCase?.isDone || !!candidate?.isProven}
              active={mobRuleCase?.isOpen}
              label="Get Mob Ruled"
              description="Your application to become a citizen is being judged now."
            />

            <Step
              done={mobRuleCase?.isDone}
              active={mobRuleCase?.isOpen}
              label="Register as Person"
              description="Create an Alias"
            />
          </>
        )}
      </>
    </div>
  )
}

interface StepProps {
  label: string
  description: string
  active?: boolean
  done?: boolean
}
const Step: React.FC<StepProps> = ({ label, description, active, done }) => (
  <div
    className={cn("items-top pointer-events-none flex space-x-2 opacity-25", {
      "opacity-100": active,
      "opacity-75": done,
    })}
  >
    <Checkbox id={label} checked={done} />
    <div className="grid gap-1.5 leading-none">
      <label
        htmlFor={label}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  </div>
)
