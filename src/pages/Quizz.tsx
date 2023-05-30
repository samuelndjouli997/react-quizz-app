import { useState } from 'react';

// import quizzData
import { quizzData } from '../constants/quizzData';
import { Link } from 'react-router-dom';
import CountdownComponent from '../components/CountdownComponent';

import { useNavigate } from 'react-router-dom';

const Quizz = () => {
    const [activeQuestion, setActiveQuestion] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<boolean>(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<null | number>(null);
    const [showError, setShowError] = useState<boolean>(false);

    const { question, choices, correctAnswer } = quizzData[activeQuestion];

    const addLeadingZero = (number: number) => (number > 9 ? number : `0${number}`)

    const navigate = useNavigate();
    

    const onClickNext = () => {
        if (selectedAnswerIndex === null) {
            setShowError(true);
        } else {
            console.log('handleQuestionDone called');
            setShowError(false);
            setSelectedAnswerIndex(null);
            setActiveQuestion((prev) => prev + 1);
        }
    };

    const onAnswerSelected = (choice: string, index: number) => {
        setSelectedAnswerIndex(index)
        if (choice === correctAnswer) {
          setSelectedAnswer(true)
        } else {    
          setSelectedAnswer(false)
        }
    }

    const handleQuestionDone = () => {
    
        if (activeQuestion === quizzData.length - 1) {
          console.log('Quiz finished');
          // Handle quiz completion or navigation logic here
            navigate('/endquizz');
          return;
        }
    
        setActiveQuestion((prev) => prev + 1);
        setSelectedAnswerIndex(null);
      };

    // const handleQuestionDone = () => {
    //     console.log('handleQuestionDone called');
    
    //     if (activeQuestion === quizzData.length - 1) {
    //       console.log('Quiz finished');
    //       // Handle quiz completion or navigation logic here
    //     } else {
    //       setActiveQuestion((prev) => {
    //         console.log('Prev activeQuestion:', prev);
    //         return prev + 1;
    //       });
    //       setSelectedAnswerIndex(null);
    //     }
    //   };

    // const handleQuestionDone = () => {
    //     if (activeQuestion === quizzData.length - 1) {
    //       console.log('Quiz finished');
    //       // Handle quiz completion or navigation logic here
    //     } else {
    //         setActiveQuestion((prev) => {
    //         console.log('Prev activeQuestion:', prev);
    //         // Increment the question number by 1 instead of directly using the previous state value
    //         const nextQuestion = prev + 1;
    //         if (nextQuestion < quizzData.length) {
    //           return nextQuestion;
    //         } else {
    //           // Handle the case when nextQuestion exceeds the question count
    //           console.log('Quiz finished');
    //           // Handle quiz completion or navigation logic here
    //           return prev;
    //         }
    //       });
    //       setSelectedAnswerIndex(null);
    //     }
    //   };

    

  return (
    <>
        <section className="flex flex-col justify-center w-[90%] lg:w-2/3 py-10 px-12 bg-white rounded-xl">
            <div className="flex flex-row justify-between items-center">
                <div>
                    <span className="active-question-no text-primary-green font-semibold text-[28px]">{addLeadingZero(activeQuestion + 1)}</span>
                    <span className="total-question text-gray-400 font-medium">/{addLeadingZero(quizzData.length)}</span>
                </div>
                <CountdownComponent nb={activeQuestion} onDone={handleQuestionDone} />
            </div>
            <div className="text-center">
                <h2 className="font-semibold text-3xl mb-8">{question}</h2>
            </div>
            
            <ul className="mb-6">
                {choices.map((choice, index) => (
                    <li className={`border-[1.5px] rounded-3xl p-4 mb-4 cursor-pointer ${selectedAnswerIndex === index ? 'selected-answer' : null}`} key={choice} onClick={() => onAnswerSelected(choice, index)}>
                        {choice}
                    </li>
                ))}
            </ul>

            {
                activeQuestion === quizzData.length - 1 && !showError ? (
                    <Link to={'/endquizz'} className="flex justify-center items-center h-[60px] w-32 mx-auto bg-primary-green hover:bg-[#304b31] px-8 rounded-full transition text-lg font-medium outline-none text-white" onClick={onClickNext}>
                        Terminer
                    </Link>
                ) : (
                    <button className="h-[60px] w-32 mx-auto bg-primary-green hover:bg-[#304b31] px-8 rounded-full transition text-lg font-medium outline-none text-white" onClick={onClickNext}>Valider</button>
                )
            }

            {   showError && ( <p className="text-red-500 text-md font-medium mt-4 bg-red-200 w-[320px] p-4 rounded-xl">Veuillez sélectionner une réponse.</p> )    }
        </section>
    </>
  )
}

export default Quizz