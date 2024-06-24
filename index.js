const input = document.getElementById("input")

function reverseString(str) {
  return str.split("").reverse().join("")
}

function check() {
  const value = input.value.trim();
  const valueLowercase = value.toLowerCase()
  const reverse = reverseString(valueLowercase);
  const h3 = document.getElementsByTagName("h3")[0];
  const defaultText = "Waiting for word...";

  if (valueLowercase === "") {
    h3.textContent = `Please enter a valid word`;
    setTimeout(function () {
      h3.textContent = defaultText;
    }, 3000)
  }
  else if (valueLowercase.length <= 1) {
      h3.textContent = `Please enter a word with more than one letter`;
      setTimeout(function () {
        h3.textContent = defaultText;
      }, 3000);
    }
  else if (reverse === valueLowercase) {
      h3.textContent = `Yes! ${value} is a palindrome`;
    }
  else {
      h3.textContent = `No, ${value} is not a palindrome`;
  }
  
    input.value = ""
}

function info() {
  let para = document.getElementById('infoText');
  let computedStyle = window.getComputedStyle(para);
  // Toggle visibility
  if (computedStyle.display === 'none') {
    para.style.display = 'block';
  } else {
    para.style.display = 'none';
  }
}

let paragraph = document.getElementById('infoText')
document.getElementById('toggleButton').addEventListener('mouseover', function () {
  paragraph.style.display = "block"
})

document.getElementById('toggleButton').addEventListener('mouseout', function () {
  paragraph.style.display = "none"
})
