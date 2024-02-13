import Spinner from "react-bootstrap/Spinner";

const PrimaryButton = ({ text = "Log in", isLoading }) => {
  return (
    <div className="w-full bg-buttonColor rounded-lg overflow-hidden h-[44px] mt-4">
      <button className="w-full h-full bg-transparent text-white text-base">
        {isLoading ? <Spinner animation="border" /> : text}
      </button>
    </div>
  );
};

export default PrimaryButton;
