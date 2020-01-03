import React from "react";
import {Carousel, Icon} from 'antd';

export default class Myslider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showarrow: false,
            currentIndex: 0,
            imgurl: [
                {
                    url: 'http://img.fancyecommerce.com/appfront/images/en_1.jpg'
                }, {
                    url: 'http://img.fancyecommerce.com/appfront/images/en_2.jpg'
                }, {
                    url: 'http://img.fancyecommerce.com/appfront/images/en_3.jpg'
                },{
                    url:'https://www.bing.com/th?id=OHR.SkyIslands_ZH-CN6229467399_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=HpEdgeAn'
                },{
                url:'https://www.bing.com/th?id=OHR.RamsauHinterseeEislauf_ZH-CN9685733410_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=HpEdgeAn'
                }
            ]
        }
        this.handlemouseover = this.handlemouseover.bind(this)
        this.handlemouseout = this.handlemouseout.bind(this)
    }

    handlemouseover() {this.setState({showarrow: true})}
    handlemouseout() {this.setState({showarrow: false})}

    changeIndex(index) {
        const length = this.state.imgurl.length
        if (index < 0) {
            index = length-1;
            this.slider.prev();
        }
        if (index > length-1) {
            index = 0;
            this.slider.next();
        } else {
            this.slider.goTo(index)
        }
        this.setState({currentIndex: index})
    }
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const imgurls = this.state.imgurl||[]
        return (
            <div className='slider-container'>
                <div className="slider-box" onMouseOver={this.handlemouseover} onMouseOut={this.handlemouseout}>
                    <Carousel autoplay={true} dots={false} ref={ref => this.slider = ref}
                              beforeChange={(form, to) => this.setState({currentIndex: to})}>
                        {imgurls.map((item)=>{
                            return(
                                <div className='slide-item' key={item.url}>
                                    <img src={item.url} alt=""/>
                                </div>
                            )
                        })}
                    </Carousel>
                    <div className="slider-dots-box">
                        {imgurls.map((item,index)=>{
                            return(
                                <div className={`slider-dots ${this.state.currentIndex === index ? 'active' : ''}`}
                                     onClick={() => this.changeIndex(index)} key={index}
                                >
                                </div>
                            )
                        })}
                    </div>
                    <div
                        className={`arrow pre-arrow ${this.state.showarrow ? 'show' : 'hide'}`}
                        onClick={() => this.changeIndex(this.state.currentIndex - 1)}
                    ><Icon type="left"/>
                    </div>
                    <div className={`arrow next-arrow ${this.state.showarrow ? 'show' : 'hide'}`}
                         onClick={() => this.changeIndex(this.state.currentIndex + 1)}
                    >
                        <Icon type="right"/>
                    </div>
                </div>
            </div>
        )
    }
}