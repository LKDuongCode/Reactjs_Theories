//tách vào đây cho gọn

export let actionCount = (type:any,value:any)=>{
    return {
        type: type ,
        payload:value,
        
    }
}

export let actionJob = (type:any,action:any)=>{
    return {
        type: type ,
        payload:action,
    }
}

