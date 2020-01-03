const initstate= {
    category:[],
    currentcategory:'',
    currentsubcate:''
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
        default :
            return state
    }
}
export default reducer
