window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const localApi = 'http://localhost:7071/api/HttpVisitorTrigger';
const functionApi = 'https://crc-visitor.azurewebsites.net/api/HttpVisitorTrigger?code=wuqqvcdVSknX9thC71t9pCRYTFy-8Vgrp7rWynmkEY0jAzFufPB54w=='; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}