import { put, takeEvery } from 'redux-saga/effects'
import * as api from '~/app/api'
import { SAGA_CREATE_COMPANY } from '~/app/reducers/Company'
import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'
import { browserHistory } from 'react-router'

function* perform(action) {
  const { company } = action.payload
  try {
    yield api.createCompany(company)
    yield put(push('/companies'))
  } catch (err) { console.log(err) }
}

function* watch() {
  yield takeEvery(SAGA_CREATE_COMPANY, perform)
}

export default watch
