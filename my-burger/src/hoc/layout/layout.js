import React,{Component} from 'react';

import Aux from '../Auxilary/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import  './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state = {
        showSideDrawer : false
    }

    sideDrawerCloseHandler = ()=>{
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer};
        })
    }

    render(){
        return (<Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
            <main className="Content">
                {this.props.children}
            </main>
            </Aux>)
    }
}

export default Layout;