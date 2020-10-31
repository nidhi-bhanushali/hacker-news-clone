export const debounce = (func, delay) => {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(context,args);
            console.log('hello')
        } ,delay );
    }
}