'use strict'

import React, { Component } from 'react';

import {
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    PanResponder,
    InteractionManager
} from 'react-native';

import Const from '../../utils/const'
import System_styles from '../../utils/system_styles'
import IMPagControll from './IMPagControll'


var faces = [
    {
        'page':0,
        items:[
            ['😀','😬','😁','😂','😃','😄','😅','😆',],
            ['😇','😉','🙃','🙂','😋','😌','😍','😘'],
            ['😗','😙','😚','😜','😝','😊','☺','delete']
        ]
    },
    {
        'page':1,
        items:[
            ['😛','🤑','🤓','😎','🤗','😏','😶','😐',],
            ['😑','😒','🙄','🤔','😳','😞','😟','😠',],
            ['😡','😔','😕','🙁','☹️','😣','😖','delete']
        ],
    },
    {
        'page':2,
        items:[
            ['😫','😩','😤','😮','😱','😨','😰','😯',],
            [  '😦','😧','😢','😥','😪','😓','😭','😵',],
            ['😲','🤐','😷','🤒','🤕','😴','💤','delete']
        ]
    },
]


var panMove = false

var oldIndex = 1


export default class copy extends Component {

    static defaultProps = {
        callback:undefined,
    };

    constructor(props){
        super(props);
        this.state = {
            index : 0,
            frist :true
        };

        this.x = 20
        this.y = 0
        this.width = 0
        this.height = 0
        this.hSpace = 0
        this.vSpace = 0

        // this.renderCount = 0

    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
                panMove = false
                if(this.width ===0){
                    this._root.measureInWindow((x, y, width, height) => {
                        this.y = y
                        this.width = width
                        this.height = height
                        this.hSpace = (width-30)/8
                        this.vSpace = height/3

                    })
                }
            },
            onPanResponderMove: (evt, gestureState) => {
                panMove = true
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                if(!panMove){
                    //相对位置
                    let mx = gestureState.x0-this.x
                    let my = gestureState.y0-this.y

                    if(mx>0&&mx<this.width&&my>0&&my<this.height){
                        let faceArr = faces[this.state.index]
                        let itemArr = faceArr.items[Math.floor(my/this.vSpace)]
                        var face = itemArr[Math.floor(mx/this.hSpace)]
                        if(face){
                            this.props.callback(face)
                        }
                    }
                }
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                return true;
            },
        });
    }


    componentDidMount (){
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                frist:false
            })
        });

    }

    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }



    _onScroll = (obj)=>{

        let i = Math.round(obj.nativeEvent.contentOffset.x/Const.screen_width)

        if (i !== this.state.index){
            this.setState({
                index:i
            })
        }

    }

    _send = ()=>{
        this.props.callback('send')
    }

    _renderFace =(item,i)=>{
        const {index ,frist} = this.state
        // if(item.page == )

        if(frist){
            return (
                <View
                    style={{width:Const.screen_width-10,}}
                    key = {item.page}

                />
            )
        }

        return(
            <View
                style={{width:Const.screen_width-10,}}
                key = {i}
                {...this._panResponder.panHandlers}
                ref={component => {if(item.page===0){this._root = component}}}
            >
                {item.items.map((item1,i)=>{
                    return(
                        <View
                            style={{flex:1,flexDirection:'row',paddingHorizontal:15}}
                            key = {i}
                        >
                            {item1.map((face)=>{
                                let com = face==='delete'?(
                                    <Image
                                        source = {require('../../assets/img/btn_del.png')}
                                    />
                                ):(
                                    <Text
                                        style={{flex:1,fontSize:30}}
                                        key = {face}
                                    >
                                        {face}
                                    </Text>
                                )
                                return(
                                    <View
                                        style = {{flex:1,justifyContent:'center',alignItems:'center'}}
                                        key = {face}

                                    >
                                        {com}
                                    </View>
                                )
                            })}
                        </View>

                    )
                })}
            </View>

        )

    }



    render() {
        const {index} = this.state
        console.log('Imface render')
        // this.renderCount =  this.renderCount+1

        return (
            <View
                style={{flex:1,paddingTop:5,borderTopColor:Const.color_hei_240,borderTopWidth:1,}}
            >
                <ScrollView
                    // style={{backgroundColor:'red'}}
                    showsHorizontalScrollIndicator = {false}
                    horizontal = {true}
                    pagingEnabled = {true}
                    onScroll = {this._onScroll}

                >
                    {faces.map((item,i)=>{
                        return this._renderFace(item,i)
                    })}
                </ScrollView>
                <IMPagControll
                    index = {index}
                    count = {3}
                />
                <View
                    style={{paddingVertical:2,borderTopColor:Const.color_hei_240,borderTopWidth:1,flexDirection:'row',justifyContent:'flex-end'}}
                >
                    <TouchableOpacity
                        onPress={this._send}
                        activeOpacity = {0.8}
                        style = {{backgroundColor:Const.color_blue,paddingVertical:3,paddingHorizontal:8,borderRadius:4}}
                    >
                        <Text
                            style={[System_styles.getChanggui(15)]}
                        >
                            发送
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}
