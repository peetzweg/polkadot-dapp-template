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

export const AccountSelect: React.FC = () => {
  const { accounts, selectAccount } = useWeb3()

  return (
    <Select onValueChange={selectAccount}>
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
      </SelectContent>
    </Select>
  )
}
