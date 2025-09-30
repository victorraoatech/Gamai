import { useNavigate } from "react-router-dom";

const BackButton = () => {
     const navigate = useNavigate();

     return (
         <button
             onClick={() => navigate(-1)}
             className="px-4 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
         >
              ← Back
         </button>
     );
};

export default BackButton;
