document.querySelector('.booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const quantity = document.getElementById('quantity').value;

  if(name && phone && address && quantity) {
    alert(`Thank you, ${name}! Your order for ${quantity} cylinder(s) will be delivered to ${address}.`);
  } else {
    alert('Please fill in all fields before submitting.');
  }
});
