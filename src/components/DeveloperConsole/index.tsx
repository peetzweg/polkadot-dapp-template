import { cn } from "../../lib/utils.js"
import { AddDesignFamily } from "./AddDesignFamily.js"
import { InterveneMobRule } from "./InterveneMobRule.js"
import { RefreshRoot } from "./RefreshRoot.js"

interface CommitProps {
  className?: string
}

export const DeveloperConsole: React.FC<CommitProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-auto flex-col gap-4 rounded-md border p-4 outline-none ring-2 ring-ring ring-offset-2 ring-offset-background md:p-6 lg:p-6",
        className,
      )}
    >
      <div className="flex h-full flex-col ">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Developer Console
          </h2>
          <code>//Alice</code>
        </div>

        <div className="flex flex-col items-start gap-4">
          <AddDesignFamily />
          <InterveneMobRule />
          <RefreshRoot />
        </div>
      </div>
    </div>
  )
}
