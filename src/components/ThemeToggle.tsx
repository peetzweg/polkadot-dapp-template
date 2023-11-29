import { MoonIcon } from "@radix-ui/react-icons"
import { useTheme } from "../providers/theme-provider"
import { Button } from "./ui/button"

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark")
      }}
    >
      <MoonIcon />
    </Button>
  )
}
