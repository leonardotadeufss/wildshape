import '../App.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Wildshape',
    description: 'Web site created with Next.js to display wildshape possiblities to druid class in D&D 5e',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" sizes="any" />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}