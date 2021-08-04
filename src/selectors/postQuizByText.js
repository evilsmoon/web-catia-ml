
export const postQuizByText = async(answer) => {
    const url = `http://127.0.0.1:8000/quizs`;
    const resp = await fetch(url, {
      method: "POST",
      body:JSON.stringify(answer),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    return data;
}

