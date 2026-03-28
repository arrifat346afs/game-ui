import { EvilButton } from "@/components/ui/evil-button"

export function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-16 bg-black p-12">
      {/* Row 1 */}
      <div className="flex flex-wrap items-center justify-center gap-20">
        <div className="flex flex-col items-center gap-4">
          <EvilButton variant="cyan">Initialize Link</EvilButton>
          <span className="font-mono text-[10px] tracking-widest text-[#334155]">
            TYPE: <span className="text-[#00d4f5]/60">PRIMARY_CYAN</span>
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <EvilButton variant="bio">Sync Database</EvilButton>
          <span className="font-mono text-[10px] tracking-widest text-[#334155]">
            TYPE: <span className="text-[#22c55e]/60">SECONDARY_BIO</span>
          </span>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap items-center justify-center gap-20">
        <div className="flex flex-col items-center gap-4">
          <EvilButton variant="warning">Purge Memory</EvilButton>
          <span className="font-mono text-[10px] tracking-widest text-[#334155]">
            TYPE: <span className="text-[#ef4444]/60">WARNING_CRITICAL</span>
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <EvilButton variant="ghost">Guest Access</EvilButton>
          <span className="font-mono text-[10px] tracking-widest text-[#334155]">
            TYPE: <span className="text-[#64748b]/60">NEUTRAL_GHOST</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
