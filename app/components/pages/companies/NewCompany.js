//@flow
import React, { PropTypes as pt } from 'react'
import { Link } from 'react-router'
import { Container, Header, Company, FormWrapper } from './CompaniesStyle'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui' 

const NewCompany = React.createClass({
  propTypes: {
    onSubmit: pt.func.isRequired
  },

  render() {
    const { handleSubmit } = this.props

    return <Container>
      <Header>New Company</Header>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="name" component={TextField} type="text" placeholder="Company Name" />
          </div>
          <div>
            <RaisedButton
              label="Add"
              onClick={handleSubmit}
            />
            <RaisedButton
              label="Cancel"
              secondary={true}
              style={{margin: '0 0 0 10px'}}
              containerElement={<Link to="/companies" />}
            />
          </div>
        </form>
      </FormWrapper>
    </Container>
  }
})

export default reduxForm({
  form: 'newCompany'
})(NewCompany)
