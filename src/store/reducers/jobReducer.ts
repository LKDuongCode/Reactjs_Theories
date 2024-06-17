let initJob:any = [{
    id:1,
    name:'code',
    state:false,
}];

let reducerJob = (state = initJob, action:any)=>{
    switch (action.type) {
        case 'ADD':
            console.log('added', action);
            // state.push(action.payload) => không ra UI do tham chiếu không bị thay đổi
            return [...state,action.payload];
    
        case 'DELETE':
            
            return state;

    
        default:
            return state;
    }
}

export default reducerJob;