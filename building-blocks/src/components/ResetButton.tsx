import { Button } from "react-bootstrap";
import { Game } from "../Game";

import "../styles/reset.css";

interface ResetButtonProps {
  game: Game;
  generatedCode: string[];
}

function ResetButton({ generatedCode, game }: ResetButtonProps): JSX.Element {
  const handleClick = (): void => {
    game = new Game();
    generatedCode = [];
  };

  return (
    <Button
      className="Reset btn"
      disabled={generatedCode.length === 0}
      onClick={handleClick}
      size="lg"
    >
      Reset
    </Button>
  );
}

export default ResetButton;
