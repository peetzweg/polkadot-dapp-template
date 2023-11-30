import { useWeb3 } from "../providers/web3-provider"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LinkBreak2Icon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"

export const AccountSelect: React.FC = () => {
  const { accounts, selectAccount, disconnect, currentAccount } = useWeb3()

  return (
    <Select onValueChange={selectAccount} value={currentAccount?.address}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an Account" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Accounts</SelectLabel>
          {accounts.map((account) => (
            <SelectItem key={account.address} value={account.address}>
              {account.meta.name}
            </SelectItem>
          ))}
        </SelectGroup>

        <hr className="my-1" />

        <div>
          <Button
            size={"icon"}
            onClick={disconnect}
            className="w-full gap-2"
            variant={"ghost"}
          >
            <LinkBreak2Icon />
            Disconnect
          </Button>
        </div>
      </SelectContent>
    </Select>
  )
}
