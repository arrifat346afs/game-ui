import { Button } from "@/components/ui/button"

export function App() {
  return (
    <div className=" flex flex-col w-screen h-screen gap-5 p-5">
      {/* Row 1 */}
      <Button variant="default" >why</Button>
      <Button variant="destructive">why</Button>
      <Button disabled>why</Button>
    </div>
  )
}

export default App
