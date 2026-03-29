import { Button } from "@/components/ui/button"
import Nave from "./components/Nave"

export function App() {
  return (
    <main>
      <Nave />
      <div className="flex gap-2 p-4">
        {/* Row 1 */}
        <Button variant="default">Submit</Button>
        <Button variant="destructive">Delete</Button>
        <Button disabled>Disabled</Button>
      </div>
    </main>
  )
}

export default App
