const [STYLE,ROOT] = [
    document.createElement("style"),
    document.querySelector("*"),
];
let STYLE_ATTR =""
const addSeparator = (str) =>{
   
    const reg = /(\w+)\s*:\s*(\w+)/g;
    return str.replaceAll(reg,`;$1:$2`).replace(";","");
}
const stringToArray = (str) =>(
    str.split(";")
)
const arrayToObject = (array) =>{
    let [key,value] = []
    let object ={}
    for(let property of array){
        [key,value] = property.split(":")
        object [`${key}`] = value
    }
    return object
}
 

STYLE.innerText ='*,::after,::before{margin:0px ; padding:0px ; box-sizing:border-box;z-index:5}'
ROOT.appendChild(STYLE)

for (const child of ROOT){
    if(child.attributes.getNamedItem('@style')){
        const getAtt = child.getAttribute('@style')
        const n =stringToArray(addSeparator(getAtt))
        console.log(n)
        console.log(arrayToObject(n))
    }
}
