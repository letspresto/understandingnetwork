const Traceroute = require('nodejs-traceroute');
const request = require('request');
const iplocation = require('iplocation')
const target = "www.facebook.com"

try {
    const tracer = new Traceroute()
    console.log("traceroute analysis")
    tracer
        .on('pid', (pid) => {
            console.log(`pid: ${pid}`)
        })
        .on('destination', (destination) => {
            console.log(`destination: ${destination}`)
        })
        .on('hop', (hop) => {
            //console.log(`hop: ${JSON.stringify(hop.ip)}`)
            var tmp =  JSON.stringify(hop.ip)
            // call api
        
            var ip= tmp.slice(1)
            ip = ip.slice(0, -1)
            // iplocation(ip, function (error, res) {
            //     console.log(res.latitude + "," + res.longitude)
            // })
            //console.log(url)
            url = "http://ip-api.com/json/" + ip
            //console.log("url: " + url)
            request(url, function (error, response, body) {
  	        //console.log('error:', error); // Print the error if one occurred 
                //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
                var obj = JSON.parse(body)
                //console.log(ip + ' lat: '+ obj.lat + " lon: " + obj.lon)
                console.log(obj.lat + "," + obj.lon)
                // console.log(' lat: '+ obj.lat + " lon: " + obj.lon)
            })
            
        })
        
        .on('close', (code) => {
            console.log(`close: code ${code}`)
        });
 
    tracer.trace(target)
} catch (ex) {
    console.log("error: " +  ex)
}
