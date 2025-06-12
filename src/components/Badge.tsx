export function Badge ({ children }: { children: React.ReactNode }) {
  return (
    <span className='flex items-center gap-2 text-sm rounded p-2 bg-slate-200 dark:bg-slate-800'>
      {children}
    </span>
  )
}
