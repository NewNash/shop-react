import React from "react";
import {Icon} from "antd";

export default function BackTop(){
    let timer = null
    const totop = ()=>{
        clearInterval(timer)
        timer = setInterval(function(){
            document.documentElement.scrollTop-=20
            if(document.documentElement.scrollTop<=0){
                clearInterval(timer)
            }
        },5)
    }
    const toqa = ()=>{
        window.console.log('toqa')
    }
    const tobottom = ()=>{
        clearInterval(timer)
        timer = setInterval(function(){
            document.documentElement.scrollTop+=20
            console.log(document.documentElement.scrollTop)
            if(document.documentElement.scrollTop===document.documentElement.scrollHeight-document.documentElement.clientHeight){
                clearInterval(timer)
                console.log('clear bottom')
            }
        },5)
    }
    return(
        <div className='backtopContainer'>
            <div className="fixeditem" onClick={totop}>
                <Icon type="up" />
            </div>
            <div className="fixeditem" onClick={toqa}>
                <Icon type="question-circle" />
            </div>
            <div className="fixeditem" onClick={tobottom}>
                <Icon type="down" />
            </div>
        </div>
    )
}