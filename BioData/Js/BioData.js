const fileInput = document.getElementById('photo');

fileInput.addEventListener('change', function(event) {
  const file = this.files[0]; 
  const maxSizeMB = 5;
  const maxSizeBytes = maxSizeMB * 1024 * 1024;

  if (file) {
    const fileName = file.name;
    const fileSize = file.size;
    const fileExtension = fileName.split('.').pop().toLowerCase();
    const allowedExtensions = ['jpeg', 'png', 'jpg'];

    if (!allowedExtensions.includes(fileExtension)) {
      alert("Please upload only jpeg, png, jpg extension files.");
      this.value = "";
      return false;
    }

    if (fileSize > maxSizeBytes) {
      alert("File size exceeds the maximum limit of " + maxSizeMB + "MB.");
      this.value = ""; 
      return false;
    }
  }
});

  // Email Validation

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

   //Dob validation 
   function validateDOB(dob) {
    var currtDate = new Date();
    var selDate = new Date(dob);
    return selDate <= currtDate;
  }

 // Mobile Number Validation
  function validateNum(num) { 
    var mobileNum = /^[0-9]{10}$/;
    return mobileNum.test(num);
  }

  document.getElementById('bioDataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const emailInput = formData.get('email');
    const numInput = formData.get('num');
    const dobInput = formData.get('dob');
    const genderInput = formData.get('gender');

    if (!validateEmail(emailInput)) {
      alert('Enter a valid email');
      return;
    }

    if (!validateDOB(dobInput)) {
      alert('Enter valid dob');
      return;
    }

    if (!validateNum(numInput)) {
      alert('Enter a valid mobile number');
      return;
    } 

    if (!genderInput) { 
      alert('Select a gender');
      return;
    }

    if (fileInput.files.length === 0) {
      alert('Please select a file');
      return;
    }
    
    const bioData = {};
    formData.forEach((value, key) => {
      bioData[key] = value;
    });
    
      console.log(bioData);
      this.reset();
    
      alert('Submitted successfully');
    });