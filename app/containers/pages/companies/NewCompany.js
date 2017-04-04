//@flow
import { connect } from 'react-redux'
import NewCompany from '~/app/components/pages/companies/NewCompany'
import { createAction } from 'redux-actions'
import { SAGA_CREATE_COMPANY } from '~/app/reducers/Company'

export const mapStateToProps = (state: Object): Object => ({})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  onSubmit: (values) => {
    dispatch(createAction(SAGA_CREATE_COMPANY)({company: values}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCompany)
