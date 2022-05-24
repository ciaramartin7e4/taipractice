// https://github.com/ciaramartin7e4/taipractice/blob/master/doc/maquinas.json
const header = document.querySelector('header');
const section = document.querySelector('section');
const requestURL = 'https://ciaramartin7e4.github.io/taipractice/doc/maquinas.json';
// const requestURL= 'doc/maquinas.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const machines = request.response;
  populateHeader(machines);
  showMachines(machines);
}
function populateHeader(jsonObj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['Description'];
  header.appendChild(myH1);

  // const myPara = document.createElement('p');
  // myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  // header.appendChild(myPara);
}
function showMachines(jsonObj) {
  const maquina = jsonObj['Payload'].workunits;

  for (var i = 0; i < maquina.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myPara4 = document.createElement('p');
    const myPara5 = document.createElement('p');
    const myPara6 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = 'Product name:'+ maquina[i].wkuname;
    myPara1.textContent = maquina[i].sitname;
    myPara2.textContent = 'Speed: '+ maquina[i].speed;
    myPara3.textContent = 'Active work order: ' + maquina[i].wohnumber;
    myPara4.textContent = 'Product: '+ maquina[i].matcode;
    myPara5.textContent = 'Product Type:' + maquina[i].wkutype;
    myPara6.textContent = 'Quantity required: '+ maquina[i].quantityrequired;

    const maquinas = maquina[i].wkuname;
    for (var j = 0; j < maquinas.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = maquinas[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myPara5.appendChild(myPara6)

    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
