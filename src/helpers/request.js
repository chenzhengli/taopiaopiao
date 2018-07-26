export default async function (path,opt) {
    const url="  https://www.easy-mock.com/mock/5b599324ce5cba4659760600/tpp"+path;
    const option=Object.assign({
        method:"GET",
    },opt);

    try{
        const response=await fetch(url,option);
        const {data,status}=await response.json();
        if(status==="0"){
            return data;
        }else{
            //错误处理
        }
    } catch (e){
        //错误处理
        //提示弹窗
    }
}