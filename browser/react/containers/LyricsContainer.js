import store from '../Store.js'
import React, { Component } from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import Sidebar from '../components/Sidebar';



export default class LyricsContainer extends React.Component(){
    constructor () {
        super()
        tihs.state = store.getState();
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            const newState = store.getState()    // update this containers state when componen mounts
            this.setState(newState);
        })
    }

    componentWillUnmount(){
        this.unsubscribe()';'
    }

}
