import React from "react";
import '../css/2048.css'
import {Button, Icon} from "antd";

export default class My2048 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            number: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            loca: []
        }
        this.handlekeydown = this.handlekeydown.bind(this)
    }

    //初始化，清空格子，分数清零，随机一个位置和数字
    //随机一个位置和数字，按照方向合并数字，添加分数，判断是否游戏结束，随机一个位置和数字
    //重复步骤2.直到游戏结束

    //初始化
    //清空格子,清空分数
    clearNumber() {
        this.setState({
            number: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            score: 0
        })
    }
    //随机一个位置和数字
    randomnumber(number) {
        //随机出现2和4，概率是80%和20%
        const roundNumber = Math.random() > 0.2 ? 2 : 4
        //随机的位置
        //所有空白的位置 参数是 目前的board,返回一个包含所有空白位置的数组
        const blanklocate = (number) => {
            let arr = []
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    //空白位置
                    if (number[i][j] === 0) {
                        arr.push([i, j])
                    }
                }
            }
            return arr
        }
        if (blanklocate(number).length === 0) {
            return number
        }
        // 在空白位置里，随机抽取一个位置
        // 参数是空白位置的数组，返回的是一个位置数组 比如[1，2]
        const getrandomloca = arr => arr[Math.floor(Math.random() * arr.length)]
        const temploca = getrandomloca(blanklocate(number))
        number[temploca[0]][temploca[1]] = roundNumber
        this.setState({number})
    }

    init() {
        console.log(this)
        this.randomnumber(this.state.number)
    }

    upmove(number) {
        //把非零的数字拿出来放到新数组中，然后从上到下把值赋给相应的列
        const number1 = JSON.parse(JSON.stringify(number))
        for (let j = 0; j < 4; j++) {
            const removeblank = () => {
                let temparr = []
                for (let i = 0; i < 4; i++) {
                    if (number[i][j] !== 0) {
                        temparr.push(number[i][j])
                        number[i][j] = 0
                    }
                }
                if (temparr.length > 0) {
                    for (let a = 0; a < temparr.length; a++) {
                        number[a][j] = temparr[a]
                    }
                }
            }
            removeblank()
            for (let i = 0; i <3; i++) {
                if (number[i][j] === number[i + 1][j]) {
                    number[i][j] *= 2
                    number[i+1][j] = 0
                    i++
                }
            }
            removeblank()
        }
        if(number===number1){
            console.log('the same')
            return
        }
        this.setState({number})
        this.randomnumber(this.state.number)
    }

    downmove(number) {
        for (let j = 0; j < 4; j++) {
            const removeblank = () => {
                let arr = []
                for (let i = 3; i >= 0; i--) {
                    if (number[i][j] !== 0) {
                        arr.push(number[i][j])
                        number[i][j] = 0
                    }
                }
                if (arr.length > 0) {
                    for (let a = 0; a < arr.length; a++) {
                        number[3 - a][j] = arr[a]
                    }
                }
            }
            removeblank()
            for (let i = 3; i >0; i--) {
                if (number[i][j] === number[i - 1][j]) {
                    number[i][j] *= 2
                    number[i-1][j] = 0
                    i--
                }
            }
            removeblank()
        }
        this.setState({number})
        this.randomnumber(this.state.number)
    }

    leftmove(number) {
        for (let i = 0; i < 4; i++) {
            const removeblank = () => {
                let arr = []
                for (let j = 0; j < 4; j++) {
                    if (number[i][j] !== 0) {
                        arr.push(number[i][j])
                        number[i][j] = 0
                    }
                }
                if (arr.length > 0) {
                    for (let a = 0; a < arr.length; a++) {
                        number[i][a] = arr[a]
                    }
                }
            }
            removeblank()
            for (let j = 0; j <3; j++) {
                if (number[i][j] === number[i][j + 1]) {
                    number[i][j] *= 2
                    number[i][j+1] = 0
                    j++
                }
            }
            removeblank()

        }
        this.setState({number})
        this.randomnumber(this.state.number)
    }

    rightmove(number) {
        console.log('right')
        for (let i = 0; i < 4; i++) {
            const removeblank = () => {
                let arr = []
                for (let j = 3; j >= 0; j--) {
                    if (number[i][j] !== 0) {
                        arr.push(number[i][j])
                        number[i][j] = 0
                    }
                }
                if (arr.length > 0) {
                    for (let a = 0; a < arr.length; a++) {
                        number[i][3 - a] = arr[a]
                    }
                }
            }
            removeblank()
            for(let j=3;j>0;j--){
                if(number[i][j]===number[i][j-1]){
                    number[i][j]*=2
                    number[i][j-1]=0
                    j--
                }
            }
            removeblank()
        }
        this.setState({number})
        this.randomnumber(this.state.number)
    }

    handlekeydown(e) {
        e.preventDefault()
        switch (e.keyCode) {
            case 37:
                this.leftmove(this.state.number)
                break
            case 38:
                this.upmove(this.state.number)
                break
            case 39:
                this.rightmove(this.state.number)
                break
            case 40:
                this.downmove(this.state.number)
                break
            case 13:
                this.init()
                break
            default:
                return
        }
    }

    componentDidMount() {
        this.init()
        document.addEventListener('keydown', this.handlekeydown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlekeydown)
    }

    render() {
        return (
            <div className="box">
                {/*<Button onClick={() => this.init()}>next</Button>*/}
                {/*<Button onClick={() => this.clearNumber()}>clear</Button>*/}
                {/*<Button onClick={() => this.upmove(this.state.number)} icon='up'/>*/}
                {/*<Button onClick={() => this.downmove(this.state.number)} icon='down'/>*/}
                {/*<Button onClick={() => this.leftmove(this.state.number)} icon='left'/>*/}
                {/*<Button onClick={() => this.rightmove(this.state.number)} icon='right'/>*/}
                <div className='my2048-container'>
                    {
                        this.state.number.map((row, index) => {
                            return (
                                <div className="myrow" key={index}>
                                    {row.map((cell, cindex) => {
                                        return (
                                            <div className={`mycell mycell-${cell}`} key={cindex}>
                                                {cell ? cell : ''}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        )
    }
}