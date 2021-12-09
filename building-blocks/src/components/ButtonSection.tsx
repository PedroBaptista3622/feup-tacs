import { Game } from "../Game";

import "../styles/ButtonSection.css";
import ResetButton from "./ResetButton";
import RunButton from "./RunButton";

interface ButtonSectionProps {
  game: Game;
  generatedCode: string[];
  onActivation: (code: string) => void;
}

function ButtonSection({
  generatedCode,
  game,
  onActivation,
}: ButtonSectionProps): JSX.Element {
  return (
    <div className="ButtonSection">
      <ResetButton game={game} generatedCode={generatedCode} />
      <RunButton onActivation={onActivation} generatedCode={generatedCode} />
    </div>
  );
}

export default ButtonSection;
