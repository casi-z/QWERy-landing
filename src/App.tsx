import {GlobalContext} from "./context";
import Header from './layouts/Header/Header'
import Footer from "@/layouts/Footer/Footer";
import MainScreen from "@/layouts/MainScreen/MainScreen";
import Wrapper from "@/components/Wrapper/Wrapper";
import InfoSection from "@/layouts/InfoSection/InfoSection";
function App() {

    return (
        <GlobalContext.Provider value={null}>
            <Header/>
            <MainScreen/>
            <Wrapper>
                <InfoSection/>
            </Wrapper>
            <Footer/>
        </GlobalContext.Provider>
    )
}

export default App
