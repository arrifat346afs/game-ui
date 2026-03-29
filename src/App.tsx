import { Button } from "@/components/ui/button"

export function App() {
  return (
    <div className="flex min-h-svh  items-center justify-center gap-16 bg-black p-12">
      {/* Row 1 */}
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
      <Button variant="neu">Neu</Button>
      <Button variant="neu-pressed">Neu Pressed</Button>
     
    </div>
  )
}

export default App
