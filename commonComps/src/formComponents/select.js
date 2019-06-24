import React, { Component } from 'react'
import { InputGroup } from 'react-bootstrap'

class Select extends Component {
    render() {
        return (
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    <input type = 'checkbox' />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
                );
            }
        } 
        
export default Select;