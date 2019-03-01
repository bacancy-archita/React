import React, { Component } from 'react';
import Inputs from './formComponents/input';
import Checkbox from './formComponents/checkbox';
import Buttons from './formComponents/button';
import Radio from './formComponents/radio';
import { handleClick } from './formComponents/button'
import { FormText, Label, Form, FormGroup, Container, Col } from 'reactstrap'
import { Row } from 'react-bootstrap';
import './form.css'


class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      fields: {
        gender: '',
        name: '',
        email: '',
        password: '',
        current: '',
        permanent: '',
        mob: ''
      },
      checkbox: false,
      isValid: false,
      error: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.edit = this.edit.bind(this);
    this.setError = this.setError.bind(this);
  }

  handleChange(e, field) {
    console.log('checkbox..', e.target.checked);
    if (field === 'check') {
      this.setState({
        checkbox: e.target.checked,
        fields: { ...this.state.fields, permanent: e.target.checked ? this.state.fields.current : '' }
      });
    } else {
      let fields = this.state.fields;
      fields[e.target.id] = e.target.value;
      this.setState({ fields });
    }
  }

  setError(error) {
    //debugger
    this.setState({ error: error })
  }

  validate(e) {
    //debugger
    let error = {};
    let result = "";
    let err = false;
    let errs = false;
    const fields = this.state.fields;
    const errors = this.state.error;
    for (let error in errors) {
      if (errors[error] !== "") {
        errs = true;
      }
    }

    for (let field in fields) {
      if (fields[field] === "") {
        err = true;
        result = "*Enter " + field;
        error[field] = result;
      }
    }
    if (err) {
      this.setState({ error: error, inValid: false }, () => {
        console.log(error);
      })

    }
    else {
      this.setState({ isValid: true })
    }

    if (errs) {
      this.setState({
        error: { ...this.state.error, error },
        isValid: false
      });
    }
    if (this.state.isValid === false) {
      alert("Not submitted")
    }
    else {
      this.setState({ isValid: true }, () => {
        this.getValues();
      })
    }
  }
 
  getValues() {
    let array = [...this.state.user, this.state.fields]
    this.setState({ user: array })
    console.log(array);
    alert("form submitted")
  }
  edit() {
    this.setState({
      fields: {
        name: 'Archita',
        email: 'nayakarchi13@gmail.com',
        password: 'Archita13',
        gender: 'female',
        permanent: 'klmfcl',
        current: 'hhbh',
        mob: '6565'
      }
    })
  }

  render() {
    const { error } = this.state;
    return (
      <Container className='wrapper' >
        <Form className='form'>
          <Col sm={5}>
            <FormGroup className='lg'>
              <Label >Username : </Label>
              <Inputs type='text'
                msg="*Please enter valid username"
                nullmsg="*Please enter username"
                error={error}
                value={this.state.fields.name}
                id='name'
                onBlur={this.setError}
                onChange={this.handleChange} />
              <FormText><span className="error">{error.name}</span></FormText>
            </FormGroup>

          </Col>
          <Col sm={5}>
            <FormGroup className='lg'>
              <Label >Email: </Label>
              <Inputs type='text'
                msg="*Please enter valid email address"

                nullmsg="*Please enter email address"
                error={error}
                value={this.state.fields.email}
                id='email'
                onBlur={this.setError}
                onChange={this.handleChange} />
              <FormText><span className="error">{error.email}</span></FormText>
            </FormGroup>

          </Col>
          <Col sm={5}>
            <FormGroup className='lg'>
              <Label >Password: </Label>
              <Inputs type='password'
                msg="*Please enter valid password"
                nullmsg="*Please enter password"
                error={error}
                value={this.state.fields.password}
                id='password'
                onBlur={this.setError}
                onChange={this.handleChange} />
              <FormText><span className="error">{error.password}</span></FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className='lg'>
              <Label >Gender </Label>
              <FormGroup>
                <Row >
                  <Col sm="1">
                    <Label>Female </Label>
                  </Col>
                  <Col>
                    <Radio
                      type="radio"
                      value='female'
                      checked={(this.state.fields.gender === 'female') ? true : false}
                      id='gender'
                      onChange={this.handleChange} />
                  </Col>
                </Row>
                <Row >
                  <Col sm="1">
                    <Label>Male </Label>
                  </Col>
                  <Col>
                    <Radio
                      type="radio"
                      value='male'
                      checked={(this.state.fields.gender === 'male') ? true : false}
                      id='gender'
                      onChange={this.handleChange} />
                  </Col>
                </Row>
                <FormText><span className="error">{error.gender}</span></FormText>
              </FormGroup>
              <Col sm={5}>
                <FormGroup className='lg'>
                  <Label >Mobile no: </Label>
                  <Inputs type='number'
                    msg="*Please enter valid mobile number"
                    nullmsg="*Please enter mobile number"
                    error={error}
                    value={this.state.fields.mob}
                    id='mob'
                    onBlur={this.setError}
                    onChange={this.handleChange} />
                  <FormText><span className="error">{error.mob}</span></FormText>
                </FormGroup>
              </Col>
              <Col sm={5}>
                <FormGroup className='lg'>
                  <Label >Current address: </Label>
                  <Inputs type="textarea"
                    msg="*Please enter valid current address"
                    nullmsg="*Please enter current address"
                    error={error}
                    value={this.state.fields.current}
                    id='current'
                    onBlur={this.setError}
                    rows="5" cols="50"
                    onChange={this.handleChange} />
                  <FormText><span className="error">{error.current}</span></FormText>
                </FormGroup>
              </Col>
              <Col sm={5}>
                <FormGroup className='lg'>
                  <Label >Permanent address: </Label>
                  <FormGroup>
                    <Label>Same as current address </Label>
                    <Checkbox
                      id="check"
                      error={error}
                      onChange={this.handleChange}
                      className="checkbox"
                      value={this.state.checkbox}
                    />
                  </FormGroup>
                  <Inputs type="textarea"
                    msg="*Please enter valid permanent address"
                    nullmsg="*Please enter permanent address"
                    value={this.state.fields.permanent}
                    error={error}
                    onChange={this.handleChange}
                    id='permanent'
                    onBlur={this.setError}
                    rows="5" cols="50" />
                  <FormText><span className="error">{error.permanent}</span></FormText>
                </FormGroup>
              </Col>
            </FormGroup>
          </Col>
          <Row>
            <Col sm="1">
              <Buttons name='Submit'
               onClick={this.validate} />
            </Col>
            <Col>
              <Buttons onClick={this.edit} name='Edit' />
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Forms;
