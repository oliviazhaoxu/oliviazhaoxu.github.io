document.getElementById('bg_color').addEventListener('click', function(event) {
    document.body.style.backgroundColor = '#808000';
  });

document.getElementById('font_color').addEventListener('click', function(event) {
  document.body.style.color = '#800080';
});

document.getElementById('font').addEventListener('click', function(event) {
  document.body.style.fontFamily = 'Futura, sans-serif';
});

document.getElementById('empty').addEventListener('click', function(event) {
  document.getElementById('replacement').innerHTML='funny';
});

document.getElementById('alert').addEventListener('click', function(event) {
  alert('Hello World!');
});


