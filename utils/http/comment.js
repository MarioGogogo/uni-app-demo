import httpClient from './index.js' //comment.js文件

const  get = function(url, params, type) {
	return httpClient.Get(url, params, type);
}
const  post =(url, params, type)=> {
	return httpClient.Post(url, params, type);
}
const  put = (url, params, type)=> {
	return httpClient.Put(url, params, type);
}
const  patch =(url, params, type)=> {
	return httpClient.Patch(url, params, type);
}
const  del = (url, params, type)=> {
	return httpClient.Delete(url, params, type);
}


export default {
	get,
	post,
	put,
	patch,
	del,
}