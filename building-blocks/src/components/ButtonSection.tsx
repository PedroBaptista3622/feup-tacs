import ResetButton from "./ResetButton";
import RunButton from "./RunButton";

interface ButtonSectionProps {
  onReset: () => void;
  onRun: () => void;
}

export const ButtonSection = ({
  onReset,
  onRun,
}: ButtonSectionProps): JSX.Element => {
  return (
    <div className="buttonSection Buttons">
      <ResetButton onActivation={onReset} />
      <RunButton onActivation={onRun} />
    </div>
  );
};

export default ButtonSection;
