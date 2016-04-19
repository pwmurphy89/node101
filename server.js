var http = require('http');
var fs = require('fs');


function renderHomePage(request, response){
	var homePageHtml = fs.readFileSync('homePageHtml.html');
	response.writeHead(200, {'content-type': 'text/html'});
	response.write(homePageHtml);
	response.end();
}
function renderResumepage(request, response){
	var resumeHtml = fs.readFileSync('bootstrap-resume.html');
	response.writeHead(200,{'content-type': 'text/html'});
	response.write(resumeHtml);
	response.end();
}

function renderClasspage(request, response){
	var classHtml = fs.readFileSync('class.html');
	response.writeHead(200,{'content-type': 'text/html'});
	response.write(classHtml);
	response.end();
}

function renderJSON(request, response){
	response.writeHead(200,{'content-type': 'application/json'});
	response.write('{"name": "Patrick"}');
	response.end();
}

function renderErrorPage(request,response){
	response.writeHead(404);
	response.write("No good");
	console.log(response.statuscode);
	response.end();
}

var server = http.createServer(function(request,response){
	response.writeHead(200, {'content-type': 'text/html'});
		if(request.url == '/'){
			renderHomePage(request,response);
		}else if(request.url == '/class'){
			renderClasspage(request,response);
		}else if (request.url == '/resume'){
			renderResumepage(request,response);
		}else if (request.url == '/json') {
			renderJSON(request, response);
		}else{
			renderErrorPage(request,response);
		}
	response.end();
});

server.listen(8000);
console.log("Our server is listening on port 8000");