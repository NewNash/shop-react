import React from "react";
import MyHeader from "../components/myheader";
import Myfooter from "../components/myfooter";
import Mynav from "../components/nav";
import Myslider from "../components/myslider";
import Mybanner from "../components/mybanner";
import Backtop from "../components/backtop";
export default function Home(){
    return(
        <div className='appcontainer'>
            <MyHeader/>
            <Mynav/>
            <Myslider/>
            <Mybanner/>
            <Myfooter/>
            <Backtop/>
        </div>
    )
}