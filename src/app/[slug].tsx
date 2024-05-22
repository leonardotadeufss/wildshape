import beasts from '../data/beasts'

export default function Page() {
    return (<></>
    )
};

export async function generateStaticParams() {
    return beasts.map((beast) => ({
        slug: beast.name,
    }))
}