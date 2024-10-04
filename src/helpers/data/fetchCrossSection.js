import axios from "axios";

export default async function fetchCrossSection(urlString) {
    console.log("F.Ing URL: " + urlString);
    try {
            const csResult = await axios.get(urlString)
            console.log(csResult.data)
            return csResult.data;
        } catch (e) {
            console.error(e);
            const msg = e.toString();
            console.log(" Bericht : " + msg);
            return msg;
        }
}