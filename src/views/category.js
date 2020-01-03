import React from "react";
import MyHeader from "../components/myheader";
import Myfooter from "../components/myfooter";
import Mynav from "../components/nav";
import Backtop from "../components/backtop";
import LeftBar from "../components/leftbar";
import '../css/category.css'
export default class Category extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <div>
               <MyHeader/>
               <Mynav/>
               <div className="category-container">
                   <div className="category-box">
                       <LeftBar/>
                   </div>
               </div>
               <Myfooter/>
               <Backtop/>
            </div>
        )
    }
}