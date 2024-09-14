var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var linkContainer = document.getElementById('share-link-container');
var shareLink = document.getElementById('share-link');
var downloadPdf = document.getElementById('pdf-btn');
// 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var professionalSummary = document.getElementById('professional-summary').value;
    var proffession = document.getElementById('profession').value;
    var linkedin = document.getElementById('linkedin').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        professionalSummary: professionalSummary,
        proffession: proffession,
        linkedin: linkedin,
        education: education,
        workExperience: workExperience,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "\n    <h1><strong><span contenteditable=\"true\">".concat(name, "</span></strong></h1>\n    <h3 contenteditable=\"true\">").concat(proffession, "</h3>\n    <h4><strong>Personal Info</strong></h4>\n    <p><strong>Email:</strong><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><strong>Phone:</strong><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><strong>Address:</strong><span contenteditable=\"true\">").concat(address, "</span></p>\n    <p><strong>LinkedIn URL:</strong><span contenteditable=\"true\">").concat(linkedin, "</span></p>\n    <h4>About Me</h4>\n    <p><strong>Professional Summary:</strong><span contenteditable=\"true\">").concat(professionalSummary, "</span></p>\n    <h4><strong>Education</strong></h4>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    <h4 >Work Experience</h4>\n    <p contenteditable=\"true\">").concat(workExperience, "</p>\n    <h4>Skills</h4>\n    <p contenteditable=\"true\">").concat(skills, "</p>");
    // ${window.location.pathname}
    resumeDisplay.innerHTML = resumeHTML;
    var shareableURL = "".concat(window.location.origin).concat(window.location.pathname, "?username=").concat(encodeURIComponent(username));
    linkContainer.style.display = 'block';
    shareLink.href = shareableURL;
    shareLink.textContent = shareableURL;
});
// downloadPdf.addEventListener('click', () => {
//     window.print();
// });
window.addEventListener('DOMContentLoaded', function () {
    downloadPdf.addEventListener('click', function () {
        console.log("Download PDF clicked");
        window.print();
    });
    // Rest of your code for loading data
});
// 
window.addEventListener('DOMContentLoaded', function () {
    var urlparams = new URLSearchParams(window.location.search);
    var username = urlparams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            // Display the saved resume directly, instead of only filling the form
            var resumeHTML = "\n                <h1><strong><span contenteditable=\"true\">".concat(resumeData.name, "</span></strong></h1>\n                <h3 contenteditable=\"true\">").concat(resumeData.proffession, "</h3>\n                <h4><strong>Personal Info</strong></h4>\n                <p><strong>Email:</strong><span contenteditable=\"true\">").concat(resumeData.email, "</span></p>\n                <p><strong>Phone:</strong><span contenteditable=\"true\">").concat(resumeData.phone, "</span></p>\n                <p><strong>Address:</strong><span contenteditable=\"true\">").concat(resumeData.address, "</span></p>\n                <p><strong>LinkedIn URL:</strong><span contenteditable=\"true\">").concat(resumeData.linkedin, "</span></p>\n                <h4>About Me</h4>\n                <p><strong>Professional Summary:</strong><span contenteditable=\"true\">").concat(resumeData.professionalSummary, "</span></p>\n                <h4><strong>Education</strong></h4>\n                <p contenteditable=\"true\">").concat(resumeData.education, "</p>\n                <h4>Work Experience</h4>\n                <p contenteditable=\"true\">").concat(resumeData.workExperience, "</p>\n                <h4>Skills</h4>\n                <p contenteditable=\"true\">").concat(resumeData.skills, "</p>");
            resumeDisplay.innerHTML = resumeHTML; // Now display the resume
            // Optionally, also populate the form fields with the data
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('address').value = resumeData.address;
            document.getElementById('professional-summary').value = resumeData.professionalSummary;
            document.getElementById('profession').value = resumeData.proffession;
            document.getElementById('linkedin').value = resumeData.linkedin;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('work-experience').value = resumeData.workExperience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
