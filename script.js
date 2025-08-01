function renderAuthors() {
    const num = parseInt(document.getElementById('numAuthors').value);
    const container = document.getElementById('authorsContainer');
    container.innerHTML = '';

    for (let i = 1; i <= num; i++) {
        container.innerHTML += `
            <div class="author-section">
                <strong>Author ${i}</strong><br>
                <label>Name:</label><input type="text" id="name${i}">
                <label>Designation:</label><input type="text" id="designation${i}">
                <label>Email:</label><input type="text" id="email${i}">
                <label>Department:</label><input type="text" id="department${i}">
                <label>College:</label><input type="text" id="college${i}">
            </div>
        `;
    }
}


function generateLatex() {
    const title = document.getElementById('title').value.toUpperCase();
    const num = parseInt(document.getElementById('numAuthors').value);
    const abstract = document.getElementById('abstract').value;
    const keywords = document.getElementById('keywords').value;

    let namesLine = '';
    let desigLine = '';
    let emailsLine = '';
    let deptCollegeLine = '';

    for (let i = 1; i <= num; i++) {
        const name = document.getElementById(`name${i}`).value;
        const designation = document.getElementById(`designation${i}`).value;
        const email = document.getElementById(`email${i}`).value;
        const dept = document.getElementById(`department${i}`).value;
        const college = document.getElementById(`college${i}`).value;

        namesLine += `\\textsuperscript{${i}}${name}`;
        desigLine += `\\textsuperscript{${i}}${designation}`;
        emailsLine += `\\textsuperscript{${i}}${email}`;
        deptCollegeLine += `\\textsuperscript{${i}}${dept}, ${college}`;

        if (i < num) {
            namesLine += ', ';
            desigLine += ', ';
            emailsLine += ', ';
            deptCollegeLine += ', ';
        }
    }

    let latex = `
    \\vspace*{0.2pt}
\\begin{center}
    \\textbf{\\LARGE ${title}}
\\end{center}

\\vspace{20pt}

\\begin{center}
    ${namesLine} \\\\
    ${desigLine} \\\\
    ${deptCollegeLine} \\\\
    Email: ${emailsLine}
\\end{center}

\\vspace{12pt}

\\begin{center}
    \\textbf{\\normalsize ABSTRACT}
\\end{center}

\\textit{
${abstract}}

\\vspace{6pt}
\\textbf{\\textit{Keywords:}} \\textit{${keywords}}
\\vspace*{20pt}

\\newpage
    `.trim();

    document.getElementById('latexOutput').value = latex;
}


function copyLatex() {
    const output = document.getElementById('latexOutput');
    output.select();
    output.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("LaTeX code copied to clipboard!");
}