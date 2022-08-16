const Phone = {
    cpu: 'SnapDragon - 8 cores',
    cores: 8,
    memory: 8,
    toRemove: Date.now(),
    info: {
        brend: 'Apple',
        os: 'Ios'
    },
    pook() {
        console.log("Pook Pook")
    }
}

console.log(JSON.stringify(Phone))
console.log(Phone.info.os)
console.log(Phone.toRemove)
delete Phone.toRemove
console.log(Phone)
Phone.pook()

class Pushka {
    constructor(model,color,calibre) {
        this.model=model,
        this.color=color,
        this.calibre=calibre
    }
    shot() {
        console.log(this.model +' pif-paf with ' + this.calibre)
    }
    
    print() {
        console.log(JSON.stringify(this))
    }
}
const ak47=new Pushka('ak47','black','7.62' )
ak47.shot()
ak47.print()

function printObjectNotPrototype(object = {})
{   
    for (let key in object) {
        if(object.hasOwnProperty(key)){ //check if key in onbject, not in prototype
        console.log('key', key)
        }
    }
}

function printObjectKeysValues(object = {})
{   
    for (let key in object) {
        if(typeof object[key] !== 'function'){ //check if key in onbject, not in prototype
        console.log('key', key)
        console.log('value', object[key])
        }
    }
}

function printObject(object = {}) {
    Object.keys(object).forEach( key =>  {
        console.log('value', object[key])
    })
}

printObjectNotPrototype(ak47)
printObjectKeysValues(Phone)
printObject(Phone)