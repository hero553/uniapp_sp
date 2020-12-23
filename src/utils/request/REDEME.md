## 1. 配置 

### 1.1 全局配置修改
``` javascript 
	config: {
		baseUrl: "http://localhost:8080/api/",
		header: {
			'Content-Type':'application/json;charset=UTF-8',
			'Content-Type':'application/x-www-form-urlencoded'
		},    
		dataType: "json",  
		responseType: "text"
	},
	interceptor: {
		request: null,
		response: null
	}
```

### 全局配置响应拦截和请求拦截
```javascript
interceptor: {
	request: (optiosn)=>{
        //逻辑
    },
	response: (optiosn)=>{
        //逻辑
    }
}
```



### 个性化局部配置拦截，自动覆盖全局拦截

``` javascript
//设置baseUrl
http.config.baseUrl = "http://localhost:8080/api/"
//设置请求前拦截器
http.interceptor.request = (config) => {
    //添加通用参数
    config.header = {
        "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
}
//设置请求结束后拦截器
http.interceptor.response = (response) => {
    //判断返回状态 执行相应操作
    return response;
}
```
### 请求方式

```javascript
http.request(url:'user/list',method:'GET').then((res)=>{
	console.log(JSON.stringify(res))
})

http.get('user/list').then((res)=>{
	console.log(JSON.stringify(res))
})

http.get('user/list', {status: 1}).then((res)=>{
	console.log(JSON.stringify(res))
})

http.post('user', {id:1, status: 1}).then((res)=>{
	console.log(JSON.stringify(res))
})

http.put('user/1', {status: 2}).then((res)=>{
	console.log(JSON.stringify(res))
})

http.delete('user/1').then((res)=>{
	console.log(JSON.stringify(res))
}) 
```













