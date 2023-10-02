import { flexyAttr } from "./dictionary/utility/attributes.js";
import { FLEXY_PROPS } from "./dictionary/utility/properties.js";
import { changePseudoClass, pseudoClass } from "./dictionary/utility/pseudoClass.js";

const [STYLE, ROOT, ELEMENTS] = [
    document.createElement("style"),
    document.querySelector(":root"),
    document.querySelectorAll("*:not(style,script)")
];

ROOT.setAttribute("ui", "flexy")

let STYLE_ATTR="",TAG_NAME = ""
const addSeparator = (str) => {
    for(const ps in pseudoClass){
        str = str.trim()
                .replaceAll(ps,changePseudoClass[ps])
    }

    const reg = /(\w+)\s*:\s*(\w+)/g;
    str = str.replaceAll(reg, `;$1:$2`).replace(";", "");

    for(const ps in changePseudoClass){
    
        str = str.replaceAll(changePseudoClass[ps],ps)
    }
    return str
}
const stringToArray = (str) => (
    str.split(";")
)
const arrayToObject = (array) => {
    let [key, value] = []
    let object = {}
    for (let property of array) {
        [key, value] = property.split(":")
        object[`${key}`] = value
    }
    return object
}



const ELEMENTS_STYLE_DEFAULT = "@Layer base{*,::after,::before{margin:0px ; padding:0px ; box-sizing:border-box;z-index:5;text-decoration:none;border:none;content:''}}"
ROOT.appendChild(STYLE)
let index = 0

for (const child of ELEMENTS) {
    TAG_NAME =child.tagName+"__ui__" + index
    child.classList.add(TAG_NAME)
    for (const attr in flexyAttr) {
        if (child.attributes.getNamedItem(attr)) {
            const getAtt = child.getAttribute(attr).length >0 ? child.getAttribute(attr) :"key:value"
            const newArray = stringToArray(addSeparator(getAtt))
            console.log(newArray);
            const property = arrayToObject(newArray)
            for (const key in property) {
                key.trim()
                let PSEUDO_CLASS, otherKey;
                const ps = `${key[0]}${key[1]}`
                if (pseudoClass[key[0]]) {
                    PSEUDO_CLASS = pseudoClass[key[0]]
                    otherKey = key.slice(1)
                } else if (pseudoClass[ps]) {
                    PSEUDO_CLASS = PSEUDO_CLASS[ps]
                    otherKey = key.slice(2)

                } else {
                    otherKey = key
                }

                if (FLEXY_PROPS[otherKey]) {
                    console.log(TAG_NAME)
                    // STYLE_ATTR += `
                    // [\\${attr}~="${key}:${property[key]}"]${flexyAttr[attr]}${(PSEUDO_CLASS ? PSEUDO_CLASS : "")}{
                    //     ${FLEXY_PROPS[otherKey]} : ${property[key].replace("{","").replace("}","")} ;
                    // }
                    //   `
                    STYLE_ATTR += `
                    .${TAG_NAME}${flexyAttr[attr]}${(PSEUDO_CLASS ? PSEUDO_CLASS : "")}{
                        ${FLEXY_PROPS[otherKey]} : ${property[key]} ;
                    }
                    `
                }
            }
        }
    }
    index ++
}
STYLE.innerHTML += `${ELEMENTS_STYLE_DEFAULT}\n${STYLE_ATTR}`
