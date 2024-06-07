import { Link } from "react-router-dom";

function MainBtn() {
  return (
    <button className="text-white hover:bg-[#FBAF85] w-40 h-12 bg-[#D87D4A] border-none uppercase">
      <Link to="/">See product</Link>
    </button>
  );
}

export default MainBtn;
