import capToDashLowerCase from "./capToDashLowerCase.js";
export default function statusToClassName (strStatusName) {

    // strStatusName = capToDashLowerCase(strStatusName) ENUMS ARE CAPS !!!
    let cssStatusClassName = '';

    switch (strStatusName) {
        case    "STARTED":
            cssStatusClassName=('status ' + strStatusName);
            break;
        case    "TRAFFIC_ENGINEERING":
            cssStatusClassName=('status ' + strStatusName);
            break;
        case    "TRAFFIC_EVALUATION":
            cssStatusClassName=('status ' + strStatusName);
            break;
        case    "CIVIL_ENGINEERING":
            cssStatusClassName=('status ' + strStatusName);
            break;
        case    "CIVIL_EVALUATION":
            cssStatusClassName=('status ' + strStatusName);
            break;
        case    "FINISHED":
            cssStatusClassName=('status ' + strStatusName);
            break;
        default:
            cssStatusClassName="";
            console.log("No valid status given! status: " + strStatusName)
            return cssStatusClassName;
    }

    return cssStatusClassName.replace(/_/g,"-").toLowerCase();

}