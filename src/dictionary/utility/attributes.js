export const flexyAttr = {
    "@style": "",
    "@hover":":hover",
    "@before": "::before",
    "@after": "::after",
    // children
    "@all": ">*",
    "@all-hover": ">*:hover",
    "@all-before": ">*::before",
    "@all-after": ">*::after",
    // 
    "@odd": ">*:nth-child(odd)",
    "@odd-before": ">*:nth-child(odd)::before",
    "@odd-after": ">*:nth-child(odd)::after",
    // 
    "@even": ">*:nth-child(even)",
    "@even-before": ">*:nth-child(even)::before",
    "@even-after": ">*::after:nth-child(even)",
    // last child
    "@last": ">*:nth-last-child(1)",
    "@last-after": ">*:nth-last-child(1)::after",
    "@last-before": ">*:nth-last-child(1)::before",
    // first child
    "@first": ">*:nth-child(1)",
    "@first-before": ">*:nth-child(1)::before",
    "@first-after": ">*:nth-child(1)::after"
}