import React from "react";
import {Icon} from "antd";
import '../css/style.css'
import { connect } from 'react-redux'

 class Myheader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lanshow: false,
            moneyshow: false
        }
    }

    handlelanshow() {
        this.setState({lanshow: true})
    }

    handlelanhide() {
        this.setState({lanshow: false})
    }

    handlemoneyshow() {
        this.setState({moneyshow: true})
    }

    handlemoneyhide() {
        this.setState({moneyshow: false})
    }
    componentDidMount() {
        console.log(this.props)
    }

     test(){
        // console.log(this.props)
        this.props.dispatch({type:'user',data:'niutengfei'})
    }
    render() {
        return (
            <div className='headerContainer'>
                <div className="headerbox">
                    <div className="header-l">
                        <div className="header-lan">
                            <p onMouseOver={() => this.handlelanshow()}
                               onMouseOut={() => this.handlelanhide()}
                            >English</p>
                            <ul style={{display: `${this.state.lanshow ? 'block' : 'none'}`}}
                                onMouseOver={() => this.handlelanshow()}
                                onMouseOut={() => this.handlelanhide()}
                            >
                                <li>English</li>
                                <li>Français</li>
                                <li>Español</li>
                                <li>中文</li>
                                <li>Italiano</li>
                                <li>German</li>
                            </ul>
                        </div>
                        <div className="header-money">
                            <p
                                onMouseOver={() => this.handlemoneyshow()}
                                onMouseOut={() => this.handlemoneyhide()}
                            >€EUR</p>
                            <ul
                                style={{display: `${this.state.moneyshow ? 'block' : 'none'}`}}
                                onMouseOver={() => this.handlemoneyshow()}
                                onMouseOut={() => this.handlemoneyhide()}
                            >
                                <li>€EUR</li>
                                <li>$USD</li>
                                <li>£GBP</li>
                                <li>￥CNY</li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-r">
                        <div className="header-sign">
                            SIGN IN / JOIN FREE
                        </div>
                        <div className="header-user">
                            <Icon type="user"/>
                        </div>
                        <div className="header-favorite">
                            <Icon type="heart"/>
                        </div>
                        <div className="header-cart" onClick={()=>this.test()}>
                            <Icon type="shopping"/>
                        </div>
                        <div>
                            {this.props.user}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return {
        user :state.userReducer.user
    }
}
const mapDispatchToProps = dispatch=>{return {dispatch}}
export default connect(mapStateToProps,mapDispatchToProps)(Myheader)
