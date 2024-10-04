export default function autoNameCrossSectionInProject(str, index){
    let arr = str.split(' | ')
    console.log(arr)
    let nwStr = "Dwarsdoorsnede " + index + " " + arr[1];
    return nwStr;
}