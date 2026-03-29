import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"

export default function Nave() {
  const { setTheme, theme } = useTheme()
  return (
    <nav className="flex items-center justify-between py-4 px-12" >
      <h1 className="font-bold">Neumorphism UI</h1>
      <Button onClick={() => {if(theme === "light"){
        setTheme("dark")
      } else {
        setTheme("light")
      }}} size="icon">
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        ) : (
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        )}
      </Button>
    </nav>
  )
}
