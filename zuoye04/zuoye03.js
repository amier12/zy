var http=require('http');
var fs=require('fs');
http.createServer(function (req,res) {
    if (req.url=="/index3.html"){
        fs.readFile("index3.html","utf-8",function (err, data) {
            if (err){
                console.log("读取失败")
                console.log(err)
            }else {
                res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                res.end(data)
            }
        })
    }else if (req.url=="/log.html"){
        fs.readFile("log.html","utf-8",function (err, data) {
            if (err){
                console.log("读取失败")
                console.log(err)
            }else {
                res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                res.end(data)
            }
        })

    }else if (req.url=="/index4.html"){
        fs.readFile("index4.html","utf-8",function (err, data) {
            if (err){                                                                                                
                console.log("读取失败")
                console.log(err)
            }else {
                res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                res.end(data)
            }
        })

    }else if(req.url=="/b.jpg"){
    	fs.readFile("b.jpg",function(err,data){
    		if(err){
    			console.log("读取失败")
    			console.log(err)
    		}else{
    			res.writeHead(200,{"content-type":"image/jpeg"})
    			res.end(data)
    		}
    	})
    }
}).listen(3000)
//console.log(localhost:3000)
