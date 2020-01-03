const initstate = {
    user:''
}

const userReducer = (state=initstate,action)=>{
    switch (action.type) {
        case 'user':
            return {...state,user:action.data}
    }
    return state
}

export default userReducer