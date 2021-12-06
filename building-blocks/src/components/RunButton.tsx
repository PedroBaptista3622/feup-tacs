import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import "../styles/run.css";

const simulateNetworkRequest = () => {
  return new Promise((resolve) => setTimeout(resolve, 500));
};

interface RunButtonProps {
  onActivation: (code: string) => void;
  generatedCode: string[];
}

function RunButton({ onActivation, generatedCode }: RunButtonProps): JSX.Element {
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = (): void => {
    if (!isLoading) {
      onActivation(generatedCode.join(""));
      setLoading(true);
    }
  };

  return (
    <div className="Run d-grid gap-2">
      <Button
        className="btn-outline-success"
        disabled={isLoading}
        onClick={handleClick}
        size="lg"
      >
        {isLoading ? "Running…" : "Run"}
      </Button>
    </div>
  );
}

export default RunButton;
