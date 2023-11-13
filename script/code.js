const conversion = document.querySelector('[data-submit]')
const results = document.querySelector('#output') 

function value (){
    let celsi = document.getElementById('celsius').value
    let celsiSum = celsi * 9/5 +32
    results.textContent = celsiSum 
}

conversion.addEventListener('click',value)