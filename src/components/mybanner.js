import React from "react";
import {Icon} from 'antd';
import axios from 'axios'

export default class Mybanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            banner1imgs:[],
            banner2imgs:[],
            bestImgurl: [
                {
                    url: 'http://img.fancyecommerce.com/media/catalog/product/cache/bd935443df1c50537d4edaab4af5d446/285/434/2/01/20160624120255_80096.jpg'
                }, {
                    url: 'http://img.fancyecommerce.com/media/catalog/product/cache/bd935443df1c50537d4edaab4af5d446/285/434/2/01/20160425122144_71146.jpg'
                },
                {
                    url: 'http://img.fancyecommerce.com/media/catalog/product/cache/bd935443df1c50537d4edaab4af5d446/285/434/2/01/20160525142537_74758.jpg'
                },
                {
                    url: 'http://img.fancyecommerce.com/media/catalog/product/cache/bd935443df1c50537d4edaab4af5d446/285/434/2/01/20160905101021_28071.jpg'
                }
            ],
            featureImgurl: [
                {
                    url: 'http://img.fancyecommerce.com/media/catalog/product/cache/bd935443df1c50537d4edaab4af5d446/285/434/2/01/20161101155240_26690.jpg'
                }, {
                    url: 'http://img.fancyecommerce.com/media/catalog/product/cache/bd935443df1c50537d4edaab4af5d446/285/434/2/01/20161024170457_10036.jpg'
                },
                {
                    url: 'http://img.fancyecommerce.com/media/catalog/product/cache/bd935443df1c50537d4edaab4af5d446/285/434/2/22/222.jpg'
                },
                {
                    url: 'http://img.fancyecommerce.com/media/catalog/product/cache/bd935443df1c50537d4edaab4af5d446/285/434/2/01/20160624120255_80096.jpg'
                }
            ]
        }
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:5000/banner1img').then(res=>{
            this.setState({
                banner1imgs:res.data.data
            })
        }).catch(error=>console.log(error))
        axios.get('http://127.0.0.1:5000/banner2img').then(res=>{
            this.setState({
                banner2imgs:res.data.data
            })
        }).catch(error=>console.log(error))
    }

    render() {
        console.log(this.state)
        return (
            <div className='bannerContainer'>
                <div className="banner-panel">
                    {
                        this.state.banner1imgs.map(item=>{return(
                            <div className="panel-box" key={item}>
                                <a href="/"><img src={item} alt=""/></a>
                            </div>
                        )})
                    }
                    {/*<div className="panel-box">*/}
                    {/*    <a href="/">*/}
                    {/*        <img src="http://img.fancyecommerce.com/appfront/images/free_en.jpg" alt=""/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    {/*<div className="panel-box">*/}
                    {/*    <a href="/">*/}
                    {/*        <img src="http://img.fancyecommerce.com/appfront/images/new.jpg" alt=""/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    {/*<div className="panel-box">*/}
                    {/*    <a href="/">*/}
                    {/*        <img src="http://img.fancyecommerce.com/appfront/images/vip.jpg" alt=""/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
                <div className="banner-ad">
                    {
                        this.state.banner2imgs.map(item=>{return(
                            <div className="adbox" key={item}>
                                <a href="/"><img src={item} alt=""/></a>
                            </div>
                        )})
                    }
                    {/*<div className="adbox">*/}
                    {/*    <a href="/">*/}
                    {/*        <img src="http://img.fancyecommerce.com/appfront/images/en_a.jpg" alt=""/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    {/*<div className="adbox">*/}
                    {/*    <a href="/">*/}
                    {/*        <img src="http://img.fancyecommerce.com/appfront/images/sammy.jpg" alt=""/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
                <BannerSlider data={{
                    slidertitle: 'BEST SELLER',
                    length: 8,
                    imgurl: this.state.bestImgurl
                }}/>
                <BannerSlider data={{
                    slidertitle: 'FEATURED PRODUCTS',
                    length: 10,
                    imgurl: this.state.featureImgurl
                }}/>
            </div>
        )
    }
}

class BannerSlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showarrow: false,
        }
        this.handleMouseover = this.handleMouseover.bind(this)
        this.handleMouseout = this.handleMouseout.bind(this)
        this.handleOnclick = this.handleOnclick.bind(this)
    }

    handleMouseover() {
        this.setState({showarrow: true})
    }

    handleMouseout() {
        this.setState({showarrow: false})
    }

    handleOnclick(e) {
        console.log(e)
    }

    render() {
        return (
            <div>
                <div className='banner-slider'>
                    <div className="banner-slider-title">
                        <h3>{this.props.data.slidertitle}</h3>
                        <p><a href="/">MORE</a></p>
                    </div>
                    <div onMouseOver={this.handleMouseover} onMouseOut={this.handleMouseout}>
                        <div className="banner-slider-box"
                             style={{width: `${300 * this.props.data.length}px`}}>
                            {
                                this.props.data.imgurl.map((item, index) => {
                                    return (
                                        <div className="banner-slider-item" key={index}>
                                            <img src={item.url} alt=""/>
                                        </div>
                                    )
                                })
                            }
                            {/*<div className="banner-slider-item">*/}

                            {/*</div>*/}
                            {/*<div className="banner-slider-item"></div>*/}
                            {/*<div className="banner-slider-item"></div>*/}
                            {/*<div className="banner-slider-item"></div>*/}
                            {/*<div className="banner-slider-item"></div>*/}
                            {/*<div className="banner-slider-item"></div>*/}
                            {/*<div className="banner-slider-item"></div>*/}
                        </div>
                        <div className={`banner-arrow banner-arrow-prev ${this.state.showarrow ? 'active' : 'hide'}`}
                             onClick={() => this.handleOnclick(1)}
                        >
                            <Icon type='left'/>
                        </div>
                        <div className={`banner-arrow banner-arrow-next ${this.state.showarrow ? 'active' : 'hide'}`}
                             onClick={() => this.handleOnclick(-1)}
                        >
                            <Icon type='right'/>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}