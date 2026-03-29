import { Button } from "@/components/ui/button"

export function App() {
  return (
    <div className="p-4 flex gap-2">
      {/* Row 1 */}
      <Button variant="default" >Submit</Button>
      <Button variant="destructive">Delete</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}

export default App
