


type AuthHeaderLayoutProps = {
  children: React.ReactNode
}

export default function AuthHeaderLayout({ children }: AuthHeaderLayoutProps) {
  return <div className="h-16 !bg-inherit !border-b-2">{children}</div>
}
