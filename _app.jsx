import GlobalStyle from '@/theme/GlobalStyle'

function Myapp({ Componet, pageProps}) {
    return (
    <>
    <GlobalStyle />
    <Componet {...pageProps} />
    </>
    )
}

export default Myapp;