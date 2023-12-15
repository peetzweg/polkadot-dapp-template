import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider.js"
import { useKeyringStore } from "../state/keyring.js"
import { Checkbox } from "./ui/checkbox.js"
import { cn } from "../lib/utils.js"

interface CandidateStateProps {
  className?: string
}

export const CandidateState: React.FC<CandidateStateProps> = ({
  className,
}) => {
  const { api } = useApi()
  const { pair } = useKeyringStore()

  const { data } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["proofOfInk", "candidates", pair?.address],
    queryFn: async () => {
      const state = await api.query.proofOfInk.candidates(pair!.address)
      if (state.isNone) return undefined

      return state.unwrap()
    },
    enabled: !!pair,
  })

  return (
    <div
      className={cn(
        "relative col-span-1 flex h-full w-auto flex-col gap-4 rounded-md border p-4 md:p-6 lg:p-6",
        className,
      )}
    >
      <>
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Candidate State
          </h2>
        </div>

        <Step
          done={data !== undefined}
          active={data === undefined}
          label="Apply for citizenship"
          description="Use voucher or pay dot"
        />

        <Step
          done={data && (data.isSelected || data.isProven)}
          active={data && data.isApplied}
          label="Commit to a Tattoo"
          description="Select a Tattoo you want to get"
        />

        <Step
          active={data && data.isSelected}
          label="Submit Evidence"
          description="Upload a video of you getting the tattoo"
        />

        <Step
          active={data && data.isProven}
          label="Get Mob Ruled"
          description="Your application to become a citizen is being judged now."
        />
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
