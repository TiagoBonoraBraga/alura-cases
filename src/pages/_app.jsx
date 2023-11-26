import GlobalStyle from '@/theme/GlobalStyle'

function Myapp({ Component, pageProps}) {
    return (
    <>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
    )
}

export default Myapp;