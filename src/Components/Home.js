import axios from 'axios'
import React, { Component } from 'react'
import NarutoCards from './NarutoCards'
import { Row } from 'react-bootstrap'

export class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            narutoData : [],
            show : false
        }
    }
    
    componentDidMount=()=>{
        let url2='http://localhost:4006/getNaruto'
        axios.get(url2).then(item=>{
            this.setState({
                narutoData :item.data,
                show : true
            })
        })
    }

    addNaruto=(data)=>{
       axios.post('http://localhost:4006/addNaruto',data)
    }

    render() {
        return (
            <>
                <Row style={{gap:'60px' , marginTop:'50px'}}>
                    {this.state.show && this.state.narutoData.map((item,idx)=>{
                        return(
                        <NarutoCards item={item} addNaruto={this.addNaruto} />
                        )
                    })}
                </Row>
            </>
        )
    }
}

export default Home
