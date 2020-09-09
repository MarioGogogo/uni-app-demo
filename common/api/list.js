import http from '../../utils/http.js'


export const get_label = (data)=> {
	 return http({
		 url:'get_label',
		 data
	 })
}


export const get_list = (data)=> {
	 return http({
		 url:'get_list',
		 data
	 })
}


export default{
	get_label,
	get_list
}