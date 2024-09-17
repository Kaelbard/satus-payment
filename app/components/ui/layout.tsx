import Link from 'next/link'
import { Button } from "./button"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-lg font-bold">
                Sistema de pagamento - Satus
              </Link>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/">Home</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/payments">Payments</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/clients">Clients</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/reports">Reports</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-muted text-muted-foreground">
        <div className="container mx-auto px-4 py-6 text-center">
          © 2023 Payment System. All rights reserved.
        </div>
      </footer>
    </div>
  )
}