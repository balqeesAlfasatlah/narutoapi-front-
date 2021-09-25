import React, { Component } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'

export class ModelForm extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModel} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.update}>
                            <Form.Control type="text" placeholder="Normal text" name="image_url" defaultValue={this.props.image_url} />
                            <Form.Control type="text" placeholder="Normal text" name="title" defaultValue={this.props.title} />
                            <Form.Control type="text" placeholder="Normal text" name="synopsis" defaultValue={this.props.synopsis} />
                            <Button variant="primary" type="submit" onClick={this.props.handleClose}>
                                Save Changes
                            </Button>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ModelForm
