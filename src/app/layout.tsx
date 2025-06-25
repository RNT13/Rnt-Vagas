import Footer from '@/components/layout/Footer/Footer'
import Navbar from '@/components/layout/Navbar/Navbar'
import ThemeProviderClient from '@/components/ThemeProviderClient'
import { GlobalStyles } from '@/styles/globalStyles'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const font = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RNT Vagas',
  description: 'RNT Vagas conecta candidatos a empresas ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <ThemeProviderClient>
          <GlobalStyles />
          <Navbar />
          {children}
          <Footer />
        </ThemeProviderClient>
      </body>
    </html>
  )
}
