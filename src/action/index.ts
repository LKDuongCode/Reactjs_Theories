//tách vào đây cho gọn

export let actionCount = (type:any,action:any)=>{
    return {
        type: type ,
        payload:action,
    }
}

export let actionJob = (type:any,action:any)=>{
    return {
        type: type ,
        payload:action,
    }
}

