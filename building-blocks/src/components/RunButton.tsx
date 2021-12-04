import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import "../styles/run.css";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function RunButton(): JSX.Element {
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
