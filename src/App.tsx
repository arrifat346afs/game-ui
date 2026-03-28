import { Button } from "@/components/ui/button"

export function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-16 bg-black p-12">
      {/* Row 1 */}
      <div className="flex flex-wrap items-center justify-center gap-20">
        <div className="flex w-60 flex-col items-center gap-4">
          <Button variant="evil-cyan">Initialize</Button>
          <span className="font-mono text-[10px] tracking-widest text-[#334155]">
            TYPE: <span className="text-[#334155]">PRIMARY_CYAN</span>
          </span>
        </div>

        <div className="flex w-60 flex-col items-center gap-4">
          <Button variant="evil-bio">Sync </Button>
          <span className="font-mono text-[10px] tracking-widest text-[#334155]">
            TYPE: <span className="text-[#334155]">SECONDARY_BIO</span>
          </span>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap items-center justify-center gap-20">
        <div className="flex w-60 flex-col items-center gap-4">
          <Button variant="evil-warning">Purge </Button>
          <span className="font-mono text-[10px] tracking-widest text-[#334155]">
            TYPE: <span className="text-[#334155]">WARNING_CRITICAL</span>
          </span>
        </div>

        <div className="flex w-60 flex-col items-center gap-4">
          <Button variant="evil-ghost">Guest </Button>
          <span className="font-mono text-[10px] tracking-widest text-[#334155]">
            TYPE: <span className="text-[#334155]">NEUTRAL_GHOST</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
