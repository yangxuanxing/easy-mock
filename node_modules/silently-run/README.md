后台运行程序，不阻断用户操作

### 使用

1. 可以作为module，require使用

        var silentlyRunner = require('../index');
        silentlyRunner.start('./proxyServer'); // start proxyServer in background
        silentlyRunner.stop(); // stop proxyServer
        
2. 也可以直接运行

		node silentlyRun ./proxyServer // start proxyServer in background
		node silentlyRun -s // stop proxyServer