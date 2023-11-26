// import Link from "@/components/Link";
import Head from '@/components/head/index'
import FAQScreen from '@/screens/FAQScreen'
// import { useEffect, useState } from "react";

export default FAQScreen;

// getStaticProps - msm c o servidor cair ele sempre traz o info statica.
export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });
    return {
        props: {
            banana: "verde",
            faq,
        }
    };
}

//getServerSideProps - roda a cada acesso q vc recebe
// export async function geterveSideProps() {
//     const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
//     const faq = await fetch(FAQ_API_URL)
//         .then((respostaDoServidor) => {
//             return respostaDoServidor.json();
//         })
//         .then((resposta) => {
//             return resposta;
//         });
//     return {
//         props: {
//             banana: "verde",
//             faq,
//         }
//     };
// }

// export default function Faq({faq}) {
//     console.log(faq)

    // get all com useEffect
    // const [faq, setFaq] = useState([]);

    // useEffect(() => {
    //     const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    //     fetch(FAQ_API_URL)
    //         .then((respostaDoServidor) => {
    //             return respostaDoServidor.json();
    //         })
    //         .then((resposta) => {
    //             console.log(resposta)
    //             setFaq(resposta)
    //         })
    // }, []);
//     return (
//         <>        
//         <Head title="FAQ - Alura" />
//         <div>
//             <h1>Faq</h1>
//             <Link href="/">
//                 Ir para home
//             </Link>
//             <ul>
//                 {faq.map(({ answer, question }) => (
//                     <li key={question}>
//                         <h2>{question}</h2>
//                         <p>{answer}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//         </>
//     )
// }