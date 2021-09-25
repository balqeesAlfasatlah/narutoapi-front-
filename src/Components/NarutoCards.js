import React, { Component } from 'react'
import { Col,Card,Button } from 'react-bootstrap'

export class NarutoCards extends Component {
    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.item.image_url} />
                        <Card.Body>
                            <Card.Title>{this.props.item.title} </Card.Title>
                            <Card.Text>
                            {this.props.item.synopsis} 
                            </Card.Text>
                            <Button onClick={()=>this.props.addNaruto(this.props.item)} variant="primary">Add to favourite</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </>
        )
    }
}

export default NarutoCards
