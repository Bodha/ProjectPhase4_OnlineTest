import React from "react";
import Button from 'react-bootstrap/Button';

const Result = ({score,retest}) => (
    <div className="result">
        <div><strong className="score">Your Score is {score}/5</strong></div>
        <Button className="result-btn" onClick={retest}>
            More Test
        </Button>
    </div>
);

export default Result;