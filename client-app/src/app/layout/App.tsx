import {Container} from "semantic-ui-react";
import NavBar from "./NavBar";
import {observer} from "mobx-react-lite";
import {Outlet, useLocation} from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import {ToastContainer} from "react-toastify";
import { useStore } from "../stores/store";
import { useEffect } from "react";
import LoadingComponent from "./LoadingComponent";


function App() {

    const location = useLocation();
    const{commonStore, userStore} = useStore();

    useEffect(() => {
        if(commonStore.token) {
            userStore.getUser(commonStore.token)
            .finally(() => {
                commonStore.setAppLoaded();
            })
        } else {
            commonStore.setAppLoaded();
        }
    }, [commonStore, userStore])

    if(!commonStore.appLoaded) return <LoadingComponent content="Loading app..."/>

    return (
        <>
            <ToastContainer position={'bottom-right'} hideProgressBar theme={'colored'} autoClose={1000}/>
            {location.pathname === '/' ? <HomePage/> : (
                <>
                    <NavBar/>
                    <Container style={{marginTop: "7em"}}>
                        <Outlet/>
                    </Container>
                </>
            )}

        </>
    );
}

export default observer(App);
