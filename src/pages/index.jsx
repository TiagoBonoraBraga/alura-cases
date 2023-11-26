import Link from "@/components/Link";

function Title({children, as}){

    const Tag = as;
    return (
        <>        
        <Tag>
            {children}
        </Tag>
        <style jsx>{`
            ${Tag} {
                color: red;
            }
        `}
        </style>        
        </>
    )
}

export default function Homepage() {
    return (
        <div>
        <Title as="h3">Alura Cases - Home</Title>
        <Link href="/faq">
            Ir para pagina FAQ
        </Link>
        </div>
    )
}