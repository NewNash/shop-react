import {put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'
function* watchcategory(){
    yield takeEvery('categoryname', getcategory)
}
function* getcategory(){
    let data
    yield axios.get('http://127.0.0.1:5000/catedata').then(res =>data=res.data.data).catch(error=>console.log(error))
    data.map(item=>item.show=false)
    yield put({type:'categorydata',data})
}

function* watchslideImg() {
    yield takeEvery('sliderImg',getsliderImg)
}
function* getsliderImg() {
    let data
    yield axios.get('http://127.0.0.1:5000/sliderimgurls').then(res =>data=res.data.data).catch(error=>console.log(error))
    yield put({type:'sliderImgUrls',data})
}


export default function* rootsaga() {
    yield all([
        watchcategory(),
        watchslideImg()
    ])
}
