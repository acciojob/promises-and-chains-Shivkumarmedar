//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const btn = document.getElementById('btn');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');
    
    const age = parseInt(ageInput.value);
    const name = nameInput.value;
    
    if (!age || !name) {
      alert('Please fill in all fields.');
      return;
    }
    
    const promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (age >= 18) {
          resolve(name);
        } else {
          reject(name);
        }
      }, 4000);
    });
    
    promise
      .then(function(name) {
        alert(`Welcome, ${name}. You can vote.`);
      })
      .catch(function(name) {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      });
  });
});
