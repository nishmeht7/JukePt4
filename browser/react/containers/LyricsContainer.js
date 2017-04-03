import store from '../store.js';
import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import Sidebar from '../components/Sidebar';
import Lyrics from '../components/Lyrics';


export default class LyricsContainer extends React.Component{
    constructor () {
        super()
        this.state = store.getState();
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            const newState = store.getState()    // update this containers state when componen mounts
            this.setState(newState);
        })
    }

    componentWillUnmount(){
        this.unsubscribe();
    }


    render () {
        return(
             <Lyrics state={this.state} />
        )
    }
}
