import React from 'react' ;
import  {questionare} from './Questionare.js';
import QuestionsAndResult from '../QuestionsAndResult/QuestionsAndResult';

export const bradi=(props)=>{
    
        return (
            <div>
                <QuestionsAndResult questionare={questionare}
                testvar="this is testvar"/>
            </div>
        )
    
}

export default bradi

// import React, { Component } from 'react';
// import SingleQuestion from '../SingleQuestion/SingleQuestion';
// import  {questionare} from './Questionare.js';
// import '../Tachi/Tachi.scss';

// export class Bradi extends Component {
//     state={
//          questionsAndSelectedAnswers: [
//             {
//                 currentQuestion: 0,
//                 selectedAnswers: []
//             }
//          ],
//          currentQuestionNumber: 0, 
//          checkedAnswers: [],
//          correctAnswers: []
//     }

//     nextQuestion=()=>{
//         console.log('next clicked');

//         //cheking correct and wrong answers for previous question
//         if (this.state.currentQuestionNumber==questionare.length-1){
//             console.log('checking answers');
//         //    let correctAnswers=[];
//             let a=[];
//             let b=[];
//             let c=[];
//             let d=[];
//             let e=[];


//             for(let z=0; z<questionare.length; z++){
//                 //a[] - array of correct answers
//                 a=[];
//                 //b[] - array of answers that user has chosen as correct
//                 b=[];
//                 //c[] - checked answers array is created after comparison of array a and array b
//                 c=[];
               
//                 //checks which answers of a question are correct by comparing with questionare's correct answers
//                 for(let y=0; y<questionare[z].answers.length; y++){
//                     a[y]=null;
//                     b[y]=null;
//                     console.log('a ',a);
//                     console.log('b ',b);
//                     for(let i=0; i<questionare[z].correctAnswer.length; i++){
//                         if(y ==questionare[z].correctAnswer[i]){
//                             a[y]=true;
//                         }
//                     }

//                     for(let i=0; i<this.state.questionsAndSelectedAnswers[z].selectedAnswers.length; i++){
//                         if(y==this.state.questionsAndSelectedAnswers[z].selectedAnswers[i]){
//                             b[y]=true;
//                         }
//                     }

//                     for(let i=0; i<questionare[z].answers.length; i++){
//                         if(a[i]==true && b[i]==true){
//                             c[i]=true;
//                         }else if( (a[i]==true &&  b[i]==null)  || (a[i]==null && b[i]==true) ){
//                             c[i]=false;
//                         }else if(a[i]==null  &&  b[i]==null){
//                             c[i]=null
//                         }

//                     }
                    
                   
//                 }

//                 //pushes correct and incorrect answers  to correct answers array
//                 e.push(a);
//                 //pushes correct correct wrong and non selected answers to checked answers [user selected answers] array
//                 d.push(c);
//             }
            
//             this.setState({checkedAnswers : d, correctAnswers:e})

//                 console.log('c from nex question answer checking ', c);
//                 console.log('d from nex question answer checking ', d);

//         }
    
      
        
//         this.setState({  currentQuestionNumber: this.state.currentQuestionNumber+1,
//             questionsAndSelectedAnswers : 
//             [...this.state.questionsAndSelectedAnswers, 
//                 {currentQuestion: (this.state.currentQuestionNumber+1), selectedAnswers: []}
//             ]

//         }) ;
       

//         console.log("hello ", this.state);

//    }

//    answerClicked=(newAnswer)=>{
//        console.log('answerClicked');
//        let duplicates = false;
//        let duplicatedAnswerIndex=null;
    
// //+-
//         //   let updatedObj = {//...this.state,
//         //                 ...this.state.questionsAndSelectedAnswers,
//         //                 ...this.state.questionsAndSelectedAnswers[this.state.currentQuestionNumber],
//         //                  //  ...this.state.questionsAndSelectedAnswers[this.state.currentQuestionNumber],
//         //                    ...this.state.questionsAndSelectedAnswers[this.state.currentQuestionNumber].currentQuestion,
//         //                    selectedAnswers: [...this.state.questionsAndSelectedAnswers[this.state.currentQuestionNumber].selectedAnswers, x]
//         //                 }


//                         let updatedObj = JSON.parse(JSON.stringify(this.state.questionsAndSelectedAnswers));
//                         for (let i=0; i<this.state.questionsAndSelectedAnswers[this.state.currentQuestionNumber].selectedAnswers.length; i++){
//                             if (newAnswer==this.state.questionsAndSelectedAnswers[this.state.currentQuestionNumber].selectedAnswers[i]){
//                                      duplicates = true;
//                                      duplicatedAnswerIndex=i;                                
//                             }
//                         }

//                         if(!duplicates){
//                             updatedObj[this.state.currentQuestionNumber].selectedAnswers.push(newAnswer);
//                         } else {
//                             updatedObj[this.state.currentQuestionNumber].selectedAnswers.splice(duplicatedAnswerIndex, 1);
//                         }
                        
//                         updatedObj[this.state.currentQuestionNumber].selectedAnswers.sort();
//                             console.log('updatedObj ', updatedObj);

//                            this.setState({questionsAndSelectedAnswers: updatedObj})

//    }
    
//     render() {
//         let questionOrResult=null;
//         let correctAnswers = null;

//         if(this.state.currentQuestionNumber<questionare.length){
//             questionOrResult= <SingleQuestion answerClicked={this.answerClicked} 
//                                             nextClicked={this.nextQuestion} 
//                                             key={this.state.currentQuestionNumber} 
//                                             currentQuestion={questionare[this.state.currentQuestionNumber]} />
//         } else {
//            questionOrResult=[]; 
//            correctAnswers=[];
//            for (let i=0; i<questionare.length; i++){
//                questionOrResult[i]=<SingleQuestion
//                                      checkedAnswers={this.state.checkedAnswers[i]} 
//                                      currentQuestion={questionare[i]} 
//                                      key={i}  
//                                     />
                
//                correctAnswers[i]=<SingleQuestion 
//                                     checkedAnswers={this.state.correctAnswers[i]} 
//                                     currentQuestion={questionare[i]} 
//                                     key={i}  
//                                    />
//            }

           
//         }

//         return (
//             <div class="questionare">
//                 <div class="questionareBox">{questionOrResult}</div>
//                 <div class="questionareBox">{correctAnswers}</div>

//             </div>
//         )
//     }
// }

// export default Bradi