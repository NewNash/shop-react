import React from "react";
import {Icon} from "antd";
import {Link} from "react-router-dom";
import logo from '../img/logo.png'
import {connect} from 'react-redux'
 class Mynav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: [
                {
                    name: 'dress',
                    show: false,
                    subcate: [
                        {
                            name: 'dress',
                            items: ['Homecoming Dresses', 'Ball Gown Dresses', 'Formal Dresses', 'Designer Dresses', 'Fast Delivery Dresses ererer']
                        },
                        {
                            name: 'Wedding Dresses',
                            items: ['Wedding Dresses 2018', 'Wedding Dresses Dress4', 'Maternity Wedding Dresses', 'Muslim Wedding Dresses','A-Line Wedding Dresses']
                        }, {
                            name: 'Bridesmaid Dresses',
                            items: ['Bridesmaid Dresses 2016', 'Elegant Bridesmaid Dresses', 'Inexpensive Bridesmaid']
                        }, {
                            name: 'Flower Girl Dresses',
                            items: ['Girls Party Dresses', 'First Communion Dresses']
                        }
                    ]
                },
                {
                    name: 'dress',
                    show: false,
                    subcate: [
                        {
                            name: 'dress',
                            items: ['Homecoming Dresses', 'Ball Gown Dresses', 'Formal Dresses', 'Designer Dresses', 'Fast Delivery Dresses ererer']
                        },
                        {
                            name: 'Wedding Dresses',
                            items: ['Wedding Dresses 2018', 'Wedding Dresses 2018', 'Wedding Dresses 2018', 'Wedding Dresses 2018']
                        }, {
                            name: 'Bridesmaid Dresses',
                            items: ['Bridesmaid Dresses 2016', 'Bridesmaid Dresses 2016', 'Bridesmaid Dresses 2016']
                        }, {
                            name: 'Flower Girl Dresses',
                            items: ['Girls Party Dresses', 'Girls Party Dresses']
                        }
                    ]
                },
                {
                    name: 'dress',
                    show: false,
                    subcate: [
                        {
                            name: 'dress',
                            items: ['Homecoming Dresses', 'Ball Gown Dresses', 'Formal Dresses', 'Designer Dresses', 'Fast Delivery Dresses ererer']
                        },
                        {
                            name: 'Wedding Dresses',
                            items: ['Wedding Dresses 2018', 'Wedding Dresses 2018', 'Wedding Dresses 2018', 'Wedding Dresses 2018']
                        }, {
                            name: 'Bridesmaid Dresses',
                            items: ['Bridesmaid Dresses 2016', 'Bridesmaid Dresses 2016', 'Bridesmaid Dresses 2016']
                        }, {
                            name: 'Flower Girl Dresses',
                            items: ['Girls Party Dresses', 'Girls Party Dresses']
                        }
                    ]
                },
                {
                    name: 'dress',
                    show: false,
                    subcate: [
                        {
                            name: 'dress',
                            items: ['Homecoming Dresses', 'Ball Gown Dresses', 'Formal Dresses', 'Designer Dresses', 'Fast Delivery Dresses ererer']
                        },
                        {
                            name: 'Wedding Dresses',
                            items: ['Wedding Dresses 2018', 'Wedding Dresses 2018', 'Wedding Dresses 2018', 'Wedding Dresses 2018']
                        }, {
                            name: 'Bridesmaid Dresses',
                            items: ['Bridesmaid Dresses 2016', 'Bridesmaid Dresses 2016', 'Bridesmaid Dresses 2016']
                        }, {
                            name: 'Flower Girl Dresses',
                            items: ['Girls Party Dresses', 'Girls Party Dresses']
                        }
                    ]
                },
            ],
        }
    }
    handleover(index) {
        // this.state.category.find((item)=>item.name===list.name)
        // const arr = [...this.state.category]
        // arr[index].show = true
        // this.setState({
        //     category: arr
        // })
        this.props.dispatch({type:'showcategory',index})
    }

    hanldeleave(index) {
        // const arr = [...this.state.category]
        // arr[index].show = false
        // this.setState({
        //     category: arr
        // })

        this.props.dispatch({type:'hidecategory',index})
    }
     componentDidMount() {
         console.log(this.props)
        this.props.dispatch({type:'category'})
    }

    render() {
        const category = this.props.category|| this.state.category
        const myreplace=(str)=>str.replace(/\s/g,'-')
        return (
            <div className='navcontainer'>
                <div className="navbox">
                    <div className="logobox">
                        <Link to="/" className='logo'><img src={logo} alt=""/></Link>
                        <div className="searchbox">
                            <input type="text" placeholder='Product Keywords'/>
                            <Icon type="search" className='searchicon'/>
                        </div>
                    </div>
                    <div className="catbox">
                        <ul className='catul'>
                            <li className='catitem'><Link to='/'>Home</Link></li>
                            {category.map((item, index) =>
                                <li key={index} className='catitem'
                                    onMouseLeave={() => this.hanldeleave(index)}
                                    onMouseEnter={() => this.handleover(index)}>
                                    <Link  to={`/c/${item.name}`}>{item.name}</Link>
                                </li>
                            )}
                        </ul>
                        <div>
                            {
                                category.map((item, index) => {
                                    return (
                                        <div className={`subnavbox ${item.show ? 'active' : ''}`}
                                             key={index}
                                             onMouseOut={() => this.hanldeleave(index)}
                                             onMouseOver={() => this.handleover(index)}
                                        >
                                            {
                                                item.subcate.map((subnav,index)=>{return(
                                                    <div key={index} className='subnav'>
                                                        <p className='subnav-title'>
                                                            <Link to={`/c/${item.name}/${myreplace(subnav.name)}`}>{subnav.name}</Link>

                                                        </p>
                                                        <ul className='subnav-ul'>
                                                            {subnav.items.map((name,index)=>{return(
                                                                <li key={index} className='subnav-item'>
                                                                    <Link to={`/c/${item.name}/${myreplace(subnav.name)}/${myreplace(name)}`}>{name}</Link>
                                                                </li>
                                                            )})}
                                                        </ul>
                                                    </div>
                                                )})
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapstatetoprops =(state)=>{
    return{
        category: state.categoryreducer.category
    }
}
const mapdispatchtoprops=(dispatch)=>{
    return{
        dispatch
    }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Mynav)