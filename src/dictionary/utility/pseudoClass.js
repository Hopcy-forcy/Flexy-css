export const pseudoClass = {
    "@":":hover",
    "*@":">*:hover",
    "@*":":hover>*",
    "*":">*",
    "<":">*::before",
    "<@":">*::before:hover",
    "@<":">*:hover::before",
    ">":">*::after",
    ">@":">::after:hover",
    "@>":">*:hover::after",
    "&":"&",
    "~":"~",
    "-":"-",
    "+":"+",
    "/":"/",
    "[":"[",
    "]":"]",
    "{":"{",
    "}":"}",
    "(":"(",
    ")":")",
    "#":"#"

}

export const changePseudoClass = {
    "@":"hover_",
    "*@":"all_hover_",
    "@*":"hover_all",
    "*":"all_",
    "<":"before_",
    "<@":"before_hover_",
    "@<":"hover_before_",
    ">":"after_",
    ">@":"after_hover_",
    "@>":"hover_after_",
    "&":"&",
    "~":"~",
    "-":"minus_",
    "+":"plus_",
    "/":"/",
    "[":"[",
    "]":"]",
    "{":"bracket_start_",
    "}":"bracket_end_",
    "(":"(",
    ")":")",
    "#":"id_"
}

