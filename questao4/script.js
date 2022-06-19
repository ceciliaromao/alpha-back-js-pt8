document.querySelector("#btn").addEventListener("click", JSONParse);

function JSONParse() {
  const result = document.querySelector("#result")
  const txt = document.querySelector("#textarea").value;
  try {
    const obj = JSON.parse(txt);
    result.textContent = 'Parsable JSON string!';
    result.style.color = 'black';
    console.log(obj);
  } catch (err) {
    result.textContent = err.message;
    result.style.color = 'red';
  }
}