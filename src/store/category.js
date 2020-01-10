const initstate= {
    category:[],
    sliderImgs:[],
    banner1Imgs:[],
    banner2Imgs:[]
}
let reducer = (state = initstate, action) => {
    switch (action.type) {
        case 'categorydata':
            return {...state,category: action.data}
        case 'showcategory':
            let arr = [...state.category]
            arr[action.index].show = true;
            return {...state,category: arr}
        case 'hidecategory':
            let arr1 = [...state.category];
            arr1[action.index].show = false;
            return {...state,category:arr1}
        case 'sliderImgUrls':
            return {...state,sliderImgs: action.data}
        default :
            return state
    }
}
export default reducer
