### MKR1000  
scan network  
MAC: F8:F0:05:F5:E6:75  
Scanning available networks...  
** Scan Networks **  
number of available networks:6  
0) SHU RFR	Signal: -67 dBm	Encryption: WPA  
1) nyuguest-legacy	Signal: -69 dBm	Encryption: None  
2) nyu-legacy	Signal: -69 dBm	Encryption: WPA2  
3) eduroam	Signal: -75 dBm	Encryption: WPA2  
4) itpsandbox	Signal: -60 dBm	Encryption: WPA  
5) DIRECT-03-HP M377 LaserJet	Signal: -77 dBm	Encryption: WPA  

### Controller
Button test wiht python & Rpi(python lib)  
https://www.instagram.com/p/BYucsHgBm2z/?taken-by=sleepy_maker  
  

python socket test
https://www.instagram.com/p/BYxSwtFhFSt/?taken-by=sleepy_maker
  
  
Combine button code and socket code  
https://www.instagram.com/p/BYzIdv0hEmx/?taken-by=sleepy_maker
  
#### Problems
1. When hit l or r button, the moving speed is kind of fast.  
--> Changed sleep duration from 0.1 to 0.8  
  
  
2. When hit x button, the program closes socket connection. At the same time, the program gets error
-->

### Commands
```shell
$ dig +trace google.com

; <<>> DiG 9.8.3-P1 <<>> +trace google.com
;; global options: +cmd
.			347914	IN	NS	m.root-servers.net.
.			347914	IN	NS	f.root-servers.net.
.			347914	IN	NS	l.root-servers.net.
.			347914	IN	NS	k.root-servers.net.
.			347914	IN	NS	d.root-servers.net.
.			347914	IN	NS	a.root-servers.net.
.			347914	IN	NS	e.root-servers.net.
.			347914	IN	NS	g.root-servers.net.
.			347914	IN	NS	b.root-servers.net.
.			347914	IN	NS	i.root-servers.net.
.			347914	IN	NS	c.root-servers.net.
.			347914	IN	NS	h.root-servers.net.
.			347914	IN	NS	j.root-servers.net.
;; Received 492 bytes from 128.122.253.79#53(128.122.253.79) in 59 ms

com.			172800	IN	NS	a.gtld-servers.net.
com.			172800	IN	NS	b.gtld-servers.net.
com.			172800	IN	NS	c.gtld-servers.net.
com.			172800	IN	NS	d.gtld-servers.net.
com.			172800	IN	NS	e.gtld-servers.net.
com.			172800	IN	NS	f.gtld-servers.net.
com.			172800	IN	NS	g.gtld-servers.net.
com.			172800	IN	NS	h.gtld-servers.net.
com.			172800	IN	NS	i.gtld-servers.net.
com.			172800	IN	NS	j.gtld-servers.net.
com.			172800	IN	NS	k.gtld-servers.net.
com.			172800	IN	NS	l.gtld-servers.net.
com.			172800	IN	NS	m.gtld-servers.net.
;; Received 488 bytes from 193.0.14.129#53(193.0.14.129) in 132 ms

google.com.		172800	IN	NS	ns2.google.com.
google.com.		172800	IN	NS	ns1.google.com.
google.com.		172800	IN	NS	ns3.google.com.
google.com.		172800	IN	NS	ns4.google.com.
;; Received 164 bytes from 192.55.83.30#53(192.55.83.30) in 25 ms

google.com.		300	IN	A	172.217.12.206
;; Received 44 bytes from 216.239.34.10#53(216.239.34.10) in 17 ms
```
