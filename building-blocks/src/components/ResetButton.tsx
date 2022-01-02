import { Button } from "react-bootstrap";

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
