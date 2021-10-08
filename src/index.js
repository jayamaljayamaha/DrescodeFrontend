import ReactDom from "react-dom";
import AppComponent from "./Components/AppComponent/AppComponent";
import Store from './Redux/Store/Store'
import { Provider } from "react-redux";

const store = Store()
ReactDom.render(
    <Provider store = {store}>
        <AppComponent/>
    </Provider>, 
    document.getElementById('root')
);