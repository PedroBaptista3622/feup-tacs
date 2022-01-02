import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const simulateNetworkRequest = () => {
  return new Promise((resolve) => setTimeout(resolve, 500));
};

interface RunButtonProps {
  onActivation: () => void;
}

function RunButton({ onActivation }: RunButtonProps): JSX.Element {
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
      onActivation();
      setLoading(true);
    }
  };

  return (
    <Button
      className="Run btn-primary"
      disabled={isLoading}
      onClick={handleClick}
      size="lg"
    >
      {isLoading ? "Running…" : "Run"}
    </Button>
  );
}

export default RunButton;
