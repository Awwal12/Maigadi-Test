const template = `
<div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed Q1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  {question}
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {answer}
                </div>
              </div>
            </div>
												`

fetch("http://localhost:1337/api/faqs/")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
				data.data.map(faq => {
					displayQuestion(faq);
				});
  })
  .catch((error) => console.error("FETCH ERROR:", error));

		function displayQuestion(data) {
  const question = data.attributes.Question;
  const answer = data.attributes.answer;

		const newTemplate = template.replace("{question}", question);
		const compiled = newTemplate.replace("{answer}", answer);

		document.getElementById("accordionFlushExample").innerHTML += compiled;
}   