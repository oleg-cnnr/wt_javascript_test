//@flow
import React, { PropTypes as pt } from 'react'
import { Link } from 'react-router'
import { Container, Header, Company } from './CompaniesStyle'
import RaisedButton from 'material-ui/RaisedButton'

const Companies = React.createClass({
  propTypes: {
    getCompanies: pt.func.isRequired,
    companies: pt.arrayOf(pt.object).isRequired
  },

  componentDidMount() {
    this.props.getCompanies()
  },

  render() {
    const { companies } = this.props

    return <Container>
      <Header>Companies</Header>
      <RaisedButton 
        primary={true}
        label="Add Company"
        style={{margin: '10px'}}
        containerElement={<Link to="companies/new"/>}
      />
      {companies.map(c =>
        <Company key={c.id}>{c.name}</Company>
      )}
    </Container>
  }
})

export default Companies
