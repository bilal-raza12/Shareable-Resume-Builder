

const form = document.getElementById('resume-form') as HTMLInputElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
const linkContainer = document.getElementById('share-link-container') as HTMLDivElement;
const shareLink = document.getElementById('share-link') as HTMLAnchorElement;
const downloadPdf = document.getElementById('pdf-btn') as HTMLButtonElement;


// 
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const professionalSummary = (document.getElementById('professional-summary') as HTMLTextAreaElement).value;
    const proffession = (document.getElementById('profession') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumeData = {
        name,
        email,
        phone,
        address,
        professionalSummary,
        proffession,
        linkedin,
        education,
        workExperience,
        skills,
    };

    localStorage.setItem(username, JSON.stringify(resumeData));

    const resumeHTML = `
    <h1><strong><span contenteditable="true">${name}</span></strong></h1>
    <h3 contenteditable="true">${proffession}</h3>
    <h4><strong>Personal Info</strong></h4>
    <p><strong>Email:</strong><span contenteditable="true">${email}</span></p>
    <p><strong>Phone:</strong><span contenteditable="true">${phone}</span></p>
    <p><strong>Address:</strong><span contenteditable="true">${address}</span></p>
    <p><strong>LinkedIn URL:</strong><span contenteditable="true">${linkedin}</span></p>
    <h4>About Me</h4>
    <p><strong>Professional Summary:</strong><span contenteditable="true">${professionalSummary}</span></p>
    <h4><strong>Education</strong></h4>
    <p contenteditable="true">${education}</p>
    <h4 >Work Experience</h4>
    <p contenteditable="true">${workExperience}</p>
    <h4>Skills</h4>
    <p contenteditable="true">${skills}</p>`;
    // ${window.location.pathname}

    resumeDisplay.innerHTML = resumeHTML;

    const shareableURL = `${window.location.origin}${window.location.pathname}?username=${encodeURIComponent(username)}`;

    linkContainer.style.display = 'block';
    shareLink.href = shareableURL;
    shareLink.textContent = shareableURL;
});

// downloadPdf.addEventListener('click', () => {
//     window.print();
// });
window.addEventListener('DOMContentLoaded', () => {
    downloadPdf.addEventListener('click', () => {
        console.log("Download PDF clicked"); 
        window.print(); 
    });

    // Rest of your code for loading data
});
// 
window.addEventListener('DOMContentLoaded', () => {
    const urlparams = new URLSearchParams(window.location.search);
    const username = urlparams.get('username');
    
    if (username) {
        const savedResumeData = localStorage.getItem(username);

        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);

            // Display the saved resume directly, instead of only filling the form
            const resumeHTML = `
                <h1><strong><span contenteditable="true">${resumeData.name}</span></strong></h1>
                <h3 contenteditable="true">${resumeData.proffession}</h3>
                <h4><strong>Personal Info</strong></h4>
                <p><strong>Email:</strong><span contenteditable="true">${resumeData.email}</span></p>
                <p><strong>Phone:</strong><span contenteditable="true">${resumeData.phone}</span></p>
                <p><strong>Address:</strong><span contenteditable="true">${resumeData.address}</span></p>
                <p><strong>LinkedIn URL:</strong><span contenteditable="true">${resumeData.linkedin}</span></p>
                <h4>About Me</h4>
                <p><strong>Professional Summary:</strong><span contenteditable="true">${resumeData.professionalSummary}</span></p>
                <h4><strong>Education</strong></h4>
                <p contenteditable="true">${resumeData.education}</p>
                <h4>Work Experience</h4>
                <p contenteditable="true">${resumeData.workExperience}</p>
                <h4>Skills</h4>
                <p contenteditable="true">${resumeData.skills}</p>`;

            resumeDisplay.innerHTML = resumeHTML; // Now display the resume

            // Optionally, also populate the form fields with the data
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('address') as HTMLTextAreaElement).value = resumeData.address;
            (document.getElementById('professional-summary') as HTMLTextAreaElement).value = resumeData.professionalSummary;
            (document.getElementById('profession') as HTMLInputElement).value = resumeData.proffession;
            (document.getElementById('linkedin') as HTMLInputElement).value = resumeData.linkedin;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
            (document.getElementById('work-experience') as HTMLTextAreaElement).value = resumeData.workExperience;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
        }
    }
});

