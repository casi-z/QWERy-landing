import usePageStyles from './Page.style'
import { ReactChild, ReactNode, FC, useEffect } from 'react'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import Wrapper from "../Wrapper/Wrapper";
import Cursor from "../Cursor/Cursor";

const { log } = console

interface PageProps {

    children: ReactChild | ReactNode,
    title?: string

}

const Page: FC<PageProps> = ({ children, title }) => {

    useEffect(() => {

        if (title) {
            document.title = title
        }

    }, [])

    const S = usePageStyles()

    return (
        <S.Page className="Page">
            <Cursor/>
            <Header/>
            {children}
            <Footer/>
        </S.Page>
    )
}
export default Page