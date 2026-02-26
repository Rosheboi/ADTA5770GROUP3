
async function loadAndUseData(){
  try{
    //Wait for file to download and turn into a JS object 
    const response = await fetch('medical_data.json');
    const data = await response.json();
    
    // Doing same step but for other file, waiting for 1st object to be created before going to next
    const response2 = await fetch('General_data.json');
    const data2 = await response2.json();
    
    //'data' is now available in this entire function

    // This is for the medical table 
    let medical_length = data.length;
    const medicalTableBody = document.querySelectorAll('tbody')[0]; // getting 1st table since there are 2
    for(let i = 0; i < medical_length; i++){
      // console.log(data[i]['Title'])

      //Creating the row 
      const row = document.createElement('tr')
        for(let j = 0; j < 3; j++){

          //Creating cell in the row(esssentially the column)
          const cell = document.createElement('td')
          //For the 1st column
          if (j == 0){
            cell.textContent = data[i]['ID'];
          }//For the 2nd column
          else if(j == 1){
            cell.textContent = data[i]['Title'];
          }//For the 3rd column
          else{

            //Creating button 
            const newButton = document.createElement('button');
            newButton.type = 'button';
            newButton.innerText = 'View PDF';
            newButton.className = 'btn w-100 btn-outline-primary';

            //Making button access when clicked, using addEventListener
            newButton.addEventListener("click", function(){
              //Basically filling the link with the name of the title for each row
              const pdfURL = `/medical-kb/${data[i]['ID']}.pdf`
              const newWindow = window.open(pdfURL, '_blank');
            })
            // Physically Adding the button
            cell.appendChild(newButton)
          };
          //Adding cell to the row
          row.appendChild(cell)
        };
        medicalTableBody.appendChild(row)      
    }
    ///////////////////////////////////////////////////////
    // This is for the General table, the 2nd table
    let general_length = data2.length;
    const generalTableBody = document.querySelectorAll('tbody')[1]; // getting 2nd table since there are 2
    for(let i = 0; i < general_length; i++){

      //Creating the row 
      const row = document.createElement('tr')
        for(let j = 0; j < 3; j++){

          //Creating cell in the row(esssentially the column)
          const cell = document.createElement('td')
          //For the 1st column
          if (j == 0){
            cell.textContent = data2[i]['ID'];
          }//For the 2nd column
          else if(j == 1){
            cell.textContent = data2[i]['Title'];
          }//For the 3rd column
          else{

            //Creating button 
            const newButton = document.createElement('button');
            newButton.type = 'button';
            newButton.innerText = 'View PDF';
            newButton.className = 'btn w-100 btn-outline-primary';

            //Making button access when clicked, using addEventListener
            newButton.addEventListener("click", function(){
              //Basically filling the link with the name of the title for each row
              const pdfURL = `/new-contaminated-copy/${data2[i]['ID']}.pdf`
              const newWindow = window.open(pdfURL, '_blank');
            })
            // Physically Adding the button
            cell.appendChild(newButton)
          };
          //Adding cell to the row
          row.appendChild(cell)
        };
        generalTableBody.appendChild(row)      
    }

    return data

  } catch(error){
      console.error('The fetch failed!', error);
  }
}
loadAndUseData()








