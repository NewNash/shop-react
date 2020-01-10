import React from "react";
import {connect} from 'react-redux'

import { withRouter } from "react-router-dom";
 class LeftBar extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const myreplace=(str)=>str.replace(/-/g,' ')
        const {category,subcate,name} = this.props.match.params||''
        // const category = this.props.match.params.category||''
        // const subcate = this.props.match.params.subcate||''
        // const name = this.props.match.params.name||''
        // console.log(this.props.category.find((item)=>item.name===myreplace(this.props.match.params.category)))
        const currentcate = this.props.category.find((item)=>item.name===myreplace(this.props.match.params.category))
        const currentsubcate = this.props
        console.log(currentcate)
        return(
            <div className='leftbar-container'>
                <div className="leftbar-title">
                    {category}
                    {/*{this.props.match.params.category}*/}
                    {/*{myreplace(this.props.match.params.category)}*/}
                </div>
                <div className="leftbar-subcate">
                    {currentcate?
                        currentcate.subcate.map((item,index)=>{return(
                        <div key={index}>
                            {item.name}
                        </div>
                    )}):''
                    }
                    {/*{subcate}*/}
                    {/*{this.props.match.params.subcate}*/}
                    {/*{myreplace(this.props.match.params.subcate)}*/}

                </div>
                <div className="leftbar-item">
                    {/*{name}*/}
                    {/*{this.props.match.params.name}*/}
                    {/*{myreplace(this.props.match.params.name)}*/}
                </div>
            </div>
        )
    }
}
const mapstatetoprops = (state)=>{
    return{
        category:state.categoryreducer.category
    }
}
const mapdispatchtoprops = (dispatch)=>{
    return{
        dispatch
    }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(withRouter(LeftBar))
// export default withRouter(LeftBar)