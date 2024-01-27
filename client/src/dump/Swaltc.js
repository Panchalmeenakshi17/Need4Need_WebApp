
import Swal from 'sweetalert2';
import tnc from "../Data/TnC";
 
const showSwal  =(event)=>{
    event.preventDefault(); 
    
    Swal.fire({
        
        text: tnc.tnc,
        width: 800,
          customclassName: {
            text: "font-scnd",
            text: "justify",
            title: "text-2xl font-scnd font-bold text-green-600",
            confirmButton:
              "bg-green-500 font-scnd hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
          },
        // icon: "warning",
        
        confirmButtonColor: "#3085d6",
        
        confirmButtonText: "Accept",
        
      }) 
  }
   
  export default showSwal ;