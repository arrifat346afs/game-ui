import { Button } from "@/components/ui/button"

export function App() {
  return (
    <div className="">
      {/* Row 1 */}
      <Button variant="default" >Submit</Button>
      <Button variant="destructive">Delete</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}

export default App
