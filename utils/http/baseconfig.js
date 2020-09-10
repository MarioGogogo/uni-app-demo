var baseconfig = {};
 //测试地址
if (process.env.NODE_ENV === 'development') { 
    baseconfig = {
        server: 'http://test1/api/',
        pdcom: "http://test2/api/", 
    }
    
 //正式地址
} else if (process.env.NODE_ENV === 'production') {  /
    baseconfig = {
        server: 'http://formal/api/',
        pdcom: "http://formal/api/",
    }
}
export default baseconfig;