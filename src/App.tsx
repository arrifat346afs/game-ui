import { Button } from "@/components/ui/button"
import Nave from "./components/Nave"

export function App() {
  return (
    <main className="flex gap-2 p-4">
      <Nave />
      <div>
        {/* Row 1 */}
        <Button variant="default">Submit</Button>
        <Button variant="destructive">Delete</Button>
        <Button disabled>Disabled</Button>
      </div>
    </main>
  )
}

export default App
