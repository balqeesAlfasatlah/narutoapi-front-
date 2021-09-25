import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import axios from 'axios'
import FavCards from './FavCards'
import ModelForm from './ModelForm'

export class Favourite extends Component {

    constructor(props) {
        super(props)

        this.state = {
            favData: [],
            show: false,
            image_url: " ",
            title: " ",
            synopsis: " ",
            showModel: false,
            index: 0, 
        }
    }

    componentDidMount = () => {
        let url2 = 'http://localhost:4006/getData'
        axios.get(url2).then(item => {
            this.setState({
                favData: item.data,
                show: true,
                
                

            })
        })
    }

    delete = (index) => {
        let id = this.state.favData[index]._id
        axios.delete(`http://localhost:4006/deleteNaruto/${id}`).then(element => {
            this.setState({
                favData: element.data,
                show: true
            })

        })
    }

    showModelForm = (index) => {
        this.setState({
            image_url: this.state.favData[index].image_url,
            title: this.state.favData[index].title,
            synopsis: this.state.favData[index].synopsis,
            index: index,
            showModel: true
        })
    }

    handleClose = () => {
        this.setState({
            showModel: false
        })
    }
 
    update=(e)=>{
        console.log('heloooooo')
        e.preventDefault();
        const id = this.state.favData[this.state.index]._id
        let data ={
            image_url : e.target.image_url.value,
            title : e.target.title.value,
            synopsis : e.target.synopsis.value,
        }
         axios.put(`http://localhost:4006/updateNaruto/${id}`,data).then(item=>{
           this.setState({
                favData : item.data,
            })
        })
    }
    
    render() {
        return (
            <>
                <Row style={{ gap: '60px', marginTop: '50px' }}>
                    {this.state.show && this.state.favData.map((item, idx) => {
                        return (
                            <FavCards item={item} idx={idx} delete={this.delete} showModelForm={this.showModelForm} />
                        )
                    })}

                   <ModelForm image_url={this.state.image_url} title={this.state.title} synopsis={this.state.synopsis}
                   update={this.update} handleClose={this.handleClose} showModel={this.state.showModel}/>
                </Row>
            </>
        )
    }
}

export default Favourite
