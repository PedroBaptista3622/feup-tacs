import { Button } from "react-bootstrap";

import "../styles/reset.css";

interface ResetButtonProps {
  onActivation: () => void;
}

function ResetButton({ onActivation }: ResetButtonProps): JSX.Element {
  return (
    <Button className="Reset btn" onClick={onActivation} size="lg">
      Reset
    </Button>
  );
}

export default ResetButton;
