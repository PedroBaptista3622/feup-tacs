import "../styles/ButtonSection.css";
import ResetButton from "./ResetButton";
import RunButton from "./RunButton";

interface ButtonSectionProps {
  onReset: () => void;
  onRun: () => void;
}

function ButtonSection({ onReset, onRun }: ButtonSectionProps): JSX.Element {
  return (
    <div className="ButtonSection">
      <ResetButton onActivation={onReset} />
      <RunButton onActivation={onRun} />
    </div>
  );
}

export default ButtonSection;
