import React, {lazy} from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import About from "./pages/About";
import {Faq} from "./pages/help/Faq";
import {Contact} from "./pages/help/Contact";
import RootLayout from "./layouts/RouteLayout";
import {HelpLayout} from "./layouts/HelpLayout";
import {PageNotFound} from "./pages/PageNotFound";
import {CareersLayout} from "./layouts/CareersLayout";

const Careers = lazy(() => import("./pages/careers/Careers"));


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path={'about'} element={<About />} />
                    <Route path={'help'} element={<HelpLayout />}>
                        <Route path={'faq'} element={<Faq />}/>
                        <Route path={'contact'} element={<Contact />}/>
                    </Route>
                </Route>

                <Route path={'careers'} element={<CareersLayout />}>
                    <Route
                        path={'careers'}
                        element={<Careers />}
                    />
                </Route>

                <Route path={'*'} element={<PageNotFound />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
