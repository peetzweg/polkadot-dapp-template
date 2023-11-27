import { useTheme } from "./components/theme-provider"
import { Button } from "./components/ui/button"

function App() {
  const { setTheme, theme } = useTheme()
  return (
    <div className="v-screen flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl">Hello Proof of Ink</h1>
      <Button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark")
        }}
      >
        Toggle Theme
      </Button>
    </div>
  )
}

export default App
