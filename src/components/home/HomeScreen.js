import React from "react";
import {useForm} from '../../hooks/useForm';
import {postQuizByText} from '../../selectors/postQuizByText';
export const HomeScreen = () => {
  const [formValeus, handelInputChange] = useForm({
    quiz: '',
  });

  const { quiz } = formValeus;

//   const handelSubmit = (e) => {
//     e.preventDefault();
//     console.log(quiz)

// }
  return (
    <div className="px-3">
      <h4>Form</h4>
      <form onSubmit={postQuizByText(quiz).then(data =>{console.log(data);})}>
        <input
          type="text"
          name="quiz"
          placeholder="enter a paragraph"
          className="form-control"
          autocomplete="off"
          value={quiz}
          onChange={handelInputChange}
        />
        <button
          type="submit"
          className="btn btn-sucess" 
        >
          Enter
        </button>

      </form>
    </div>
  );
};
