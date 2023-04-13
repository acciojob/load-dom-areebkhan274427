//your JS code here. If required.
const body = document.querySelector('body');
  
  // Clear the body content
  body.innerHTML = '';
  
  // Create a new text node
  const text = document.createTextNode('DOM load success');
  
  // Append the text node to the body
  body.appendChild(text);