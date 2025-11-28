import { useNavigate } from "react-router-dom"

export const BackbtnDark = () => {
    const navigate = useNavigate();
    return(
        <div 
            onClick={() => navigate(-1)} 
            className='h-full cursor-pointer'
        >
            <div className='flex flex-col justify-center h-auto apptextminib'>
                Back
            </div>
        </div>
    )
}