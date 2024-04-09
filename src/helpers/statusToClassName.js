import capToDashLowerCase from "./capToDashLowerCase.js";
export default function statusToClassName (strStatusName) {

    strStatusName = capToDashLowerCase(strStatusName)
    console.log("capToDash..." + strStatusName)
    let cssStatusClassName = '';

    switch (strStatusName) {
        case    "started":
            cssStatusClassName=('status ' + strStatusName);
            break;
        case    "traffic-engineering":
            cssStatusClassName=('status ' + strStatusName);
            break;
        case    "traffic-evaluation":
            cssStatusClassName=('status ' + strStatusName);
            break;
        case    "civil-engineering":
            cssStatusClassName=('status ' + strStatusName);
            break;
        case    "civil-evaluation":
            cssStatusClassName=('status ' + strStatusName);
            break;
        case    "finished":
            cssStatusClassName=('status ' + strStatusName);
            break;
        default:
            cssStatusClassName="";
            console.log("No valid status given! status: " + strStatusName)
    }

    return cssStatusClassName;
}