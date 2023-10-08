import {GlobalContext} from "./context";
import Header from './layouts/Header/Header'
import Footer from "@/layouts/Footer/Footer";
import MainScreen from "@/layouts/MainScreen/MainScreen";
import Wrapper from "@/components/Wrapper/Wrapper";
import InfoSection from "@/layouts/InfoSection/InfoSection";
import Slider from "@/layouts/Slider/Slider";
import Cursor from "@/components/Cursor/Cursor";
import CultureSection from "@/layouts/CultureSection/CultureSection";
function App() {

    return (
        <GlobalContext.Provider value={null}>
            <Header/>
            <MainScreen/>
            <Cursor/>
            <Wrapper>
                <InfoSection/>
                <Slider/>
                <CultureSection/>
            </Wrapper>
            <Footer/>
        </GlobalContext.Provider>
    )
}

export default App
