import HeaderComponent from './HeaderComponent.jsx';
import MainComponent from './MainComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import ModalComponent from './ModalComponent.jsx';
import GoTopComponent from './GoTopComponent.jsx';



export default function WrapComponent(){
    return(
        <div id="wrap">
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
            <ModalComponent/>
            <GoTopComponent/>
        </div>
    )
}