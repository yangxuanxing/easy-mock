## 快速搭建本地、测试环境Mock服务器

1. 安装

		npm install easy-mock
	
	或者
	
		git clone git@github.com:518yxx/easy-mock.git
		
2. 运行

		node index.js
		
3. 使用

	访问[127.0.0.1:4444/index.html](http://127.0.0.1:4444/index.html)

	在当前目录放入任意文件,访问 “127.0.0.1:4444/[文件名]” 即可。
	
	> 对于.json为后缀的请求，支持jsonp

4. 停止

		node index.j -s

5. 配置

	在config.json中可以配置端口号和静态文件路径