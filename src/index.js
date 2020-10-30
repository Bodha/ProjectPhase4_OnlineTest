
import React, { Component } from "react";
import ReactDOM from "react-dom";
import service from "./services/question-service";
import TestList from "./components/test-component";
import Result from "./components/review-result-component";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

class Test extends Component{

    constructor() {
        super();
        this.state = {
            questions : [],
            score : 0,
            attempted : 0
        };
    }

    getQuestions = () => {
        service()
        .then(question => {
            this.setState({
                questions: question
            });
        });
    };

    componentDidMount() {
        this.getQuestions();
    }

    checkAnswer = (chosenAns, correctAns) => {
        if(chosenAns === correctAns){
            this.setState({
                score : this.state.score + 1
            });
        }
        this.setState({
            attempted : this.state.attempted < 5 ? this.state.attempted + 1 : 5
        });
    }

    startNewTest = () => {
        
        // this.getQuestions();
        // this.setState({
        //     score : 0,
        //     attempted : 0
        // });
        window.location.reload(false);
    }

    render(){
        return(
            <Container className="container">
                <h1 className="title">Online Test</h1>
                { this.state.questions.length > 0 && 
                  this.state.attempted < 5 &&
                  this.state.questions.map(({question,answers,answer,id}) => (
                  <TestList question={question} options={answers} id={id} 
                    selected={chosenAnswer => this.checkAnswer(chosenAnswer,answer)} /> 
                  ))
                }
                {
                    this.state.attempted === 5 ? 
                    (<Result 
                        score={this.state.score} 
                        retest={this.startNewTest} 
                    />) : null
                }
            </Container>
        );
    }
}

ReactDOM.render(<Test />, document.getElementById("root"));
