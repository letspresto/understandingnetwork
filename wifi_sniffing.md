# Wifi Sniffing

## Wifi Sniffing with Android
### GNURoot Debian
#### setup
```shell
$ apt-get update
$ apt-get install python
$ apt-get install python3-pip
$ apt-get install python3-requests
$ apt-get install python-requests
$ apt-get install git
$ apt-get install aircrack-ng
$ airmon-ng start wlan0
$ airodump-ng mon0
```

I've tried to do wifi sniffing with an Android device, Nexus7, however, there is a permission problem.
I haven't gotten any data from wifi sniffing.

What I've understand about this experiment.
My tablet(Nexus7 2012) supports 2.4GHz and technically, running aircrack-ng on Android is possible if users can get root.  
I can't use a tp-link wifi adapter and alpha wifi adapter for wifi sniffing because my tablet's can't recognize or supply enough power to wifi adapters.


## Simple Visualization with openFrameworks and NShey

NSHey https://github.com/samatt/NSHey
In this case, I focus on devices' mac address and signal strength that are sending probe request.  

#### Probe request
A probe request is a special frame sent by a client station requesting information from either a specific access point, specified by SSID, or all access points in the area, specified with the broadcast SSID.

### What I did
Get Mac Address and Signal Strength via NSHey and display those data and send them to openFrameworks with websocket.

### How to visualize them
![](https://github.com/orz-orz-orz-orz-orz/understandingnetwork/blob/master/nshey.png)
I'm using Mac Address to generate rgb colors(background and circle color) and signal strength is used as the circle's diameter.  
Mac Address
99:00:aa:ff:ba:cd
99:00:aa ---> background color   hex to dec  
ff:ba:cd ---> circle color       hex to dec  


## Camouflage Mac Address
Generally, Mac Address is used to identify a device and an organaization stores info.
Mac Address is kind of troublesome for me because of NGEMS. It will be related to pravacy issues directly.
So, sometimes I think about Mac Address. When I visted a gym, it just occurred to me. We can camouflage our IP address and we could register a new Mac address and the number of Mac Address is bigger than IPs. Seems that camouflaging Mac Address could be possible. Then, I researched on it.

Step1 Generate random Mac Address-ish strings

```shell
$ node gen.js
4e:38:02:e1:97:20
c8:5e:5e:9d:7a:52
2e:23:17:d0:d0:73
d1:d6:10:50:9b:78
5c:c7:ef:a8:63:e5
```
script  
https://github.com/orz-orz-orz-orz-orz/understandingnetwork/blob/master/week8/gen.js

Step2 Install Spoof  

```shell
$ npm install spoof -g
```

Step3 Camouflage Mac Address
In this case, I use 4e:38:02:e1:97:20

```shell
$ sudo spoof set 4e:38:02:e1:97:20 en0
option
$ sudo spoof randomize en0

$ ifconfig en0
en0: flags=8823<UP,BROADCAST,SMART,SIMPLEX,MULTICAST> mtu 1500
	ether 4e:38:02:e1:97:20
	nd6 options=201<PERFORMNUD,DAD>
	media: autoselect (<unknown type>)
	status: inactive
```

Step4 Reset
```shell
sudo spoof reset en0
```

As you can see camouflaging Mac Address is super easy with a tool, however it causes a problem. In my case, I lost the connection to the internet. I guess the university's network system checks Mac Addresses.

Before  
![](https://github.com/orz-orz-orz-orz-orz/understandingnetwork/blob/master/week8/mac_address/before.png)
  
After  
![After](https://github.com/orz-orz-orz-orz-orz/understandingnetwork/blob/master/week8/mac_address/after.png)

