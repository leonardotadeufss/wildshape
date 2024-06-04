import ScrollToTop from 'src/components/ScrollToTop';
import '../App.css';
import type { Metadata } from 'next'
import Footer from 'src/components/Footer';

export const metadata: Metadata = {
    title: 'Forma Selvagem',
    description: 'WebApp criado utilizando Next.js para exibir as possibilidades de forma selvagem para a classe Druid em D&D 5e',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <html lang="en">
                <head>
                    <link rel="icon" href="/favicon.png" sizes="any" />
                </head>
                <body>
                    <div id="root">
                        {children}
                    </div>
                    <Footer />
                </body>
            </html>
        </>
    )
}