import { cn } from "../lib/utils.js"
import { useQueryCandidateState } from "../queries/useQueryCandidateState.js"
import { Checkbox } from "./ui/checkbox.js"

interface CandidateStateProps {
  className?: string
}

export const CandidateState: React.FC<CandidateStateProps> = ({
  className,
}) => {
  const { data } = useQueryCandidateState()

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
            Mob Rule Case
          </h2>
        </div>

        <p>todo</p>
      </>
    </div>
  )
}
