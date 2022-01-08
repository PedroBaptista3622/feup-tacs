import OptimizeButton from "./OptimizeButton";
import ResetButton from "./ResetButton";
import RunButton from "./RunButton";

interface ButtonSectionProps {
  onReset: () => void;
  onRun: () => void;
  onOptimize: () => void;
  isCodeReady: boolean;
  isGameOver: boolean;
}

export const ButtonSection = ({
  onReset,
  onRun,
  isCodeReady,
  isGameOver,
  onOptimize,
}: ButtonSectionProps): JSX.Element => {
  return (
    <div className="buttonSection Buttons">
      <ResetButton onActivation={onReset} />
      <RunButton isCodeReady={isCodeReady} onActivation={onRun} />
      <OptimizeButton isGameOver={isGameOver} onActivation={onOptimize} />
    </div>
  );
};

export default ButtonSection;
