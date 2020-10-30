import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const TestList = ({question, options, selected}) => {

    const [chosen, setAnswer] = useState(options);

    return(
        <div className="test">
            <div><strong className="question">{question}</strong></div>
            {
                chosen.map((option,index) => (
                    <Button key={index} className="option-btn" 
                        onClick={ () => { 
                            setAnswer([option]);
                            selected(option);
                            } }>
                        {option}
                    </Button>
                ))
            }
        </div>
    );
};

export default TestList;

