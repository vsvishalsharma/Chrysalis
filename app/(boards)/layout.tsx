import Navbar from "@/components/Navbar";

const boardlayout=({children}:{children:React.ReactNode})=>{
    return(
        <div>
            <Navbar/>
            {children}
        </div>
        
    )
}
export default boardlayout;