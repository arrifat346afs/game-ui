import { Button } from "@/components/ui/button"
import Nave from "./components/Nave"

export default function App() {
  return (
    <main className="flex gap-2 p-4">
      <Nave />
      <div className="space-y-2 space-x-2">
        {/* Row 1 */}
        <Button variant="default">Submit</Button>
        <Button variant="destructive">Delete</Button>
        <Button disabled>Disabled</Button>
      </div>
    </main>
  )
}


