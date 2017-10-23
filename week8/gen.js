for(let i=0; i<5; i++) {
    genMac()
}

function genMac() {
    const len = 12
    let c = "abcdef0123456789"
    let cl = c.length;
    let r = ""
    for(let i=0; i<len; i++) {
        r +=c[Math.floor(Math.random()*cl)]
        if(i<len-1 && (i+1)%2==0) { r += ":" }
    }
    console.log(r)
}

