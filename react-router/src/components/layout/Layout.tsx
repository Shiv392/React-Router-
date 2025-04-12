import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const sectionStyle={
    'display':'flex',
    'justifyContent':'Center',
    'width':'100%',
    'alignItems':'center',
    // 'height': '70vh'
}

const Layout=()=>{
return(
    <>
    <Header />
    <section style={sectionStyle}>
    <Outlet></Outlet>
    </section>
    <Footer />
    </>
)
}
export default Layout;