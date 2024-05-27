import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-bg-primary py-3 text-center">
            <div>
                <p>Desenvolvido por: <Link className="text-decoration-none text-white" href={'https://github.com/leonardotadeufss'}>Leonardo Tadeu ©</Link></p>
            </div>
            <div>
                <p>Todos os conteúdos presentes pertencem aos seus criadores originais</p>
            </div>
        </footer>
    )
};
