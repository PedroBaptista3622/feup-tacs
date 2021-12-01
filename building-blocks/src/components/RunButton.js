import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import "../styles/run.css";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function RunButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div className="Run d-grid gap-2">
      <Button
        className="btn-outline-success"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        size="lg"
      >
        {isLoading ? "Running…" : "Run"}
      </Button>
    </div>
  );
}

export default RunButton;
