import { Button } from "react-bootstrap";

interface OptimizeButtonProps {
  onActivation: () => void;
  isGameOver: boolean;
}

function OptimizeButton({
  onActivation,
  isGameOver,
}: OptimizeButtonProps): JSX.Element {
  return (
    <Button
      disabled={!isGameOver}
      className="Optimize btn"
      onClick={onActivation}
      size="lg"
    >
      Optimize
    </Button>
  );
}

export default OptimizeButton;
