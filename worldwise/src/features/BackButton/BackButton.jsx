import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
};
