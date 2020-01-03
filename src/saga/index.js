import {put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'
function* watchcategory(){
    yield takeEvery('category', getcategory)
}
function* getcategory(){
    let data
    yield axios.get('http://127.0.0.1:5000/catedata').then(res =>data=res.data.data)
    data.map(item=>item.show=false)
    yield put({type:'categorydata',data})
}


export default function* rootsaga() {
    yield all([
        watchcategory(),
    ])
}
