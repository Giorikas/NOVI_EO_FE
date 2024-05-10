import './ImageManagement.css'
import CustomButton from "../custombutton/CustomButton.jsx";



export default function ImageManagement(){
//CHILD

        return(
            <>
                <section className="image-management">
                    <div className="image-management-left">
                        <p>Placeholder for image</p>
                    </div>
                    <div className="flex-column-center">
                        <div className="image-management-right">
                            <CustomButton type="button" disabled={false} >
                                <span className="material-icons">download</span>
                            </CustomButton>

                            <CustomButton type="button" disabled={false} >
                                <span className="material-icons">upload</span>
                            </CustomButton>

                            <CustomButton classname="delete-button" type="button" disabled={false} >
                                <span className="material-icons">delete</span>
                            </CustomButton>
                        </div>
                    </div>
                </section>
            </>
        )}
