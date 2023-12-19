import { cn } from "../lib/utils.js"
import { useQueryPeopleState } from "../queries/useQueryPeopleState.js"
import { Textarea } from "./ui/textarea.js"

interface PeopleStateProps {
  className?: string
}

export const PeopleState: React.FC<PeopleStateProps> = ({ className }) => {
  const { data: peoples } = useQueryPeopleState()

  return (
    <div
      className={cn(
        "relative col-span-1 flex h-full w-auto flex-col gap-4 rounded-md border p-4 md:p-6 lg:p-6",
        className,
      )}
    >
      <>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            People Root
          </h2>
          <code>People::root()</code>
        </div>

        <div>
          <Textarea
            disabled
            rows={5}
            value={JSON.stringify(peoples, undefined, 2)}
          />
        </div>
      </>
    </div>
  )
}
