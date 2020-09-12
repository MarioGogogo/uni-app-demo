//写在index.js文件
 const httpClient = {
	 // 页面请求的时候会传一个type，根据type值来调用不同域名的地址，下文有示例
	 getUrl: function(type, url) {
	 	let allurl = ""
	 	if (type == 1) {
	 		allurl = baseconfig.server
	 	} else if (type == 2) {
	 		allurl = baseconfig.pdcom
	 	}
	 	return allurl + url
	},
 	request: function(method, url, data, contenType) {
 		let p = {
 			XToken: '',
 			XUser: '',
 			ContentType: 'application/json' //默认值
 		};

 		//获取接口token本地存储的token值---此字段视项目情况而定
 		var XToken = uni.getStorageSync('Token');
 		if (XToken) {
 			p.XToken = XToken;
 		}

 		//获取接口User本地存储的User值---此字段视项目情况而定
 		var XUser = uni.getStorageSync('User');
 		if (XUser) {
 			p.XUser = XUser;
 		}
 		if (contenType) {
 			p.ContentType = contenType;
 		}

 		//头部信息封装
 		var herders = {
 			'X-Token': p.XToken,
 			'X-User': p.XUser,
 			'Content-Type': p.ContentType
 		};

 		return new Promise((resolve, reject) => {
 			//添加一个提示框，可以提升交互，也能防止数据未加载完用户点击导致报错
 			// uni.showLoading({
 			// 	title: '加载中',
 			// 	mask: true
 			// });
 			uni.request({
 				url: url, //接口地址
 				header: herders,
 				data: data, // 传入的参数
 				method: method, // 请求方法
 				success: function(res) {
					console.log('请求回来了吗',res);
 					//关闭提示框
 					// uni.hideLoading();

 					if (res.statusCode !== 200) { //请求失败显示报错信息
 						uni.showToast({
 							title: res.statusCode.toString(),
 							duration: 1000,
 							icon: "none"
 						})
 						return;
 					}
 					//请求token失效或者是错误，直接返回到登录页，让用户重新登陆
 					if (!res.data.success && res.data.message == "Token校验失败异常:未登录,或者token错误!null" || res.data.message ==
 						'Token校验失败异常:token ' + '[' + XToken + ']' + ' ' + 'is invalid') {
 						uni.showToast({
 							title: '登录过期请重新登录',
 							duration: 1000,
 							icon: "none"
 						})
 						setTimeout(function() {
 							uni.reLaunch({
 								url: "../../../pages/login/login/login"
 							})
 						}, 1500)
 					}
 					resolve(res.data) // 成功返回的结果
 				},
 				fail: function(err) {
 					uni.hideLoading()
 					reject(err) // 失败结果
 				}
 			})
 		});
 	},

 	// 常用请求方法封装
 	Get: function(url, data, type) {
 		let allurl = this.getUrl(type, url);
 		return this.request('GET', allurl, data);
 	},
 	Post: function(url, data, type) {
 		let allurl = this.getUrl(type, url);
 		return this.request('POST', allurl, data);
 	},
 	Put: function(url, data, type) {
 		let allurl = this.getUrl(type, url);
 		return this.request('PUT', allurl, data);
 	},
 	Patch: function(url, data, type) {
 		let allurl = this.getUrl(type, url);
 		return this.request('PATCH', allurl, data);
 	},
 	Delete: function(url, data, type) {
 		let allurl = this.getUrl(type, url);
 		return this.request('DELETE', allurl, data);
 	},

 	
 };
 // 导出方法
 module.exports = httpClient
