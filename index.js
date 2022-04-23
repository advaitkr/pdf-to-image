const pdfKit = require('pdfkit');
const fs = require('fs')

function createSamplePDF(){

    let stream = fs.createWriteStream('./files/sample.pdf');
    let pdf = new pdfKit();
    let boldFont = "Helvetica-Bold";
    let normalFont = "Helvetica";
    let answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    pdf.pipe(stream);
    pdf.text("Hello world",5,5);
    pdf.font(boldFont).text("What is Lorem Ipsum?",5,15)
    pdf.font(normalFont).fillColor("#ff3c2e").text(answer,5,30);
    pdf.image("./images/nature.jpg",5,150,{width:150,height:150});
    pdf.image("./images/nature.jpg",350,150,{width:150,height:150})
    pdf.font(normalFont)
    pdf.addPage();
    pdf.rect(5,20,560,100).stroke("#000")
    pdf.text(answer,7,25);
    pdf.end();
    console.log("PDF created successfully")
}
createSamplePDF()