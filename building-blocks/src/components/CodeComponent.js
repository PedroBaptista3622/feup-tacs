import { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import "../styles/code.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function CodeComponent() {
    return (
        <div class="code-col">
            <div class="codeHeader">Code</div>
            <div class="codeBody">
                <textarea class="code"> </textarea>
            </div>
            <LoadingButton> </LoadingButton>
        </div>
    )
}

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
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
        <div className="d-grid gap-2">
            <Button
                className="btn-outline-success"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
                size="lg"
            >
                {isLoading ? 'Running…' : 'Run'}
            </Button>
        </div>

    );
}





export default CodeComponent;
