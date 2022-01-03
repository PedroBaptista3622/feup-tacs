import ResetButton from "./ResetButton";
import RunButton from "./RunButton";

interface ButtonSectionProps {
  onReset: () => void;
  onRun: () => void;
  isCodeReady: boolean;
}

export const ButtonSection = ({
  onReset,
  onRun,
  isCodeReady,
}: ButtonSectionProps): JSX.Element => {
  return (
    <div className="buttonSection Buttons">
      <ResetButton onActivation={onReset} />
      <RunButton isCodeReady={isCodeReady} onActivation={onRun} />
    </div>
  );
};

export default ButtonSection;
