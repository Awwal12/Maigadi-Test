//start of KeyFeatures API call and display

fetch("http://localhost:1337/api/key-features/")
		.then((response) => {
				if (response.ok) {
						return response.json();
				} else {
						throw new Error("NETWORK RESPONSE ERROR");
				}
		})
		.then(data => {
				console.log(data);
				data.data.map(keyF => {
					displayKeyFeatures(keyF);
				});
		})
		.catch((error) => console.error("FETCH ERROR:", error));

		function displayKeyFeatures(data) {

			const template = `
										<div class="col-8 col-lg-3 col-xl-3">
												<div class="card border-0">
														<div class="card-body text-center py-4">
																<h4>{features}</h4>
																<p style = "min-height:70px;">{desc}</p>
																<a href="#" class="btn btn-outline-primary btn-lg mt-3">
																		Learn More
																</a>
														</div>
												</div>
										</div>
												`
												
												const features = data.attributes.FeatureTitle;
												const desc = data.attributes.FeatureDesc;

												const newTemplate = template.replace("{features}", features);
		const compiled = newTemplate.replace("{desc}", desc);

		document.getElementById("bodys").innerHTML += compiled;
	}   

	//Start of FAQs API call and display
	
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
const template = `
<div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed Q1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne">
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

  const question = data.attributes.Question;
  const answer = data.attributes.answer;

		const newTemplate = template.replace("{question}", question);
		const compiled = newTemplate.replace("{answer}", answer);

		document.getElementById("accordionFlushExample").innerHTML += compiled;
}   
//End of FAQs API call and display
// Start of Post API 

const form1=document.getElementById('forms')

form1.addEventListener('submit', function(e){
 e.preventDefault()

	const formData = new FormData(form1);
	const data = Object.fromEntries(formData);
 // var email=document.getElementById('email').value
 // var name=document.getElementById('name').value
 // var yourQuestion=document.getElementById('query').value
	// subject.OnChange = (e) => {
	// 	result.innerText = even.target.value;
	// }

 fetch('http://localhost:1337/api/get-in-touches', {
  method: 'POST',
  body: JSON.stringify({data:data}),
  //  { data: {email:email, 
		// 	name:name,
		// 	reason:subject,
  //  yourQuestion:query
		// 	}
  // }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(function(response){ 
  return response.json()})
  .then(function(data)
  {console.log(data)
  // title=document.getElementById("title")
  // body=document.getElementById("bd")
  // title.innerHTML = data.title
  // body.innerHTML = data.body  
}).catch(error => console.error('Error:', error)); 
});