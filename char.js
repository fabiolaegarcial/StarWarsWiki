var currNum = 1;
var startupChar = function(currNum){
    if (currNum != 0){
        let url = `https://swapi.dev/api/people/${currNum}/`;
        fetch(url)
            .then((resp) => {
                if (!resp.ok) throw new Error(resp.statusText);                
                return resp.json();
            })
            .then((char) => {
                // change name
                let nameObj = document.querySelector('.char-name2');
                let name = JSON.parse(JSON.stringify(char.name));
                nameObj.innerHTML = `${name}`;
                // change birth info
                let birthObj = document.querySelector('.char-birth');
                let birth = JSON.parse(JSON.stringify(char.birth_year));
                birthObj.innerHTML = `Born: <h4 class="innerText">${birth}</h4>`;

                //species
                let speciesObj = document.querySelector('.char-species');
                speciesObj.innerHTML = `Species: <h4 class="innerText">Human</h4>`;
                let speciesLink = JSON.parse(JSON.stringify(char.species));
                console.log(speciesLink);
                let specie;
                fetch(speciesLink)
                    .then((resp) => {
                        if (!resp.ok) throw new Error(resp.statusText);                
                        return resp.json();
                    })
                    .then((specy) => {
                        specie = JSON.parse(JSON.stringify(specy.name));
                        speciesObj.innerHTML = `Species: <h4 class="innerText">${specie}</h4>`;
                    })
                    .catch((err) => {
                        console.error(err);
                    })

                // change gender info
                let genderObj = document.querySelector('.char-gender');
                let gender = JSON.parse(JSON.stringify(char.gender));
                genderObj.innerHTML = `Gender: <h4 class="innerText">${gender}</h4>`;
                // change height info
                let heightObj = document.querySelector('.char-height');
                let height = JSON.parse(JSON.stringify(char.height));
                heightObj.innerHTML = `Height: <h4 class="innerText">${height}</h4>`;
                // change mass info
                let massObj = document.querySelector('.char-mass');
                let mass = JSON.parse(JSON.stringify(char.mass));
                massObj.innerHTML = `Mass: <h4 class="innerText">${mass}</h4>`;
                // change hair info
                let hairObj = document.querySelector('.char-hair');
                let hair = JSON.parse(JSON.stringify(char.hair_color));
                hairObj.innerHTML = `Hair Color: <h4 class="innerText">${hair}</h4>`;
                // change skin info
                let skinObj = document.querySelector('.char-skin');
                let skin = JSON.parse(JSON.stringify(char.skin_color));
                skinObj.innerHTML = `Skin Color: <h4 class="innerText">${skin}</h4>`;
                // change eye info
                let eyeObj = document.querySelector('.char-eye');
                let eye = JSON.parse(JSON.stringify(char.eye_color));
                eyeObj.innerHTML = `Eye Color: <h4 class="innerText">${eye}</h4>`;

                // change films info
                let filmObj = document.querySelector('.char-films');
                filmObj.innerHTML = `Films: `;
                let filmList = char.films;
                let indx = 1;
                filmList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((film) => {
                            let filmTitle = JSON.parse(JSON.stringify(film.title));
                            filmObj.innerHTML += `<h4 class="innerText">(${indx}) ${filmTitle}  </h4>`;
                            indx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

function changeCharPrev(){
    if (currNum != 0){
        if (currNum == 1){
            currNum = 82;
        } else {
            currNum -= 1;
        }
        let url = `https://swapi.dev/api/people/${currNum}/`;
        fetch(url)
            .then((resp) => {
                if (!resp.ok) throw new Error(resp.statusText);                
                return resp.json();
            })
            .then((char) => {
                // change name
                let nameObj = document.querySelector('.char-name2');
                let name = JSON.parse(JSON.stringify(char.name));
                nameObj.innerHTML = `${name}`;
                // change birth info
                let birthObj = document.querySelector('.char-birth');
                let birth = JSON.parse(JSON.stringify(char.birth_year));
                birthObj.innerHTML = `Born: <h4 class="innerText">${birth}</h4>`;
                
                //species
                let speciesObj = document.querySelector('.char-species');
                speciesObj.innerHTML = `Species: <h4 class="innerText">Human</h4>`;
                let speciesLink = JSON.parse(JSON.stringify(char.species));
                console.log(speciesLink);
                let specie;
                fetch(speciesLink)
                    .then((resp) => {
                        if (!resp.ok) throw new Error(resp.statusText);                
                        return resp.json();
                    })
                    .then((specy) => {
                        specie = JSON.parse(JSON.stringify(specy.name));
                        speciesObj.innerHTML = `Species: <h4 class="innerText">${specie}</h4>`;
                    })
                    .catch((err) => {
                        console.error(err);
                    })

                // change gender info
                let genderObj = document.querySelector('.char-gender');
                let gender = JSON.parse(JSON.stringify(char.gender));
                genderObj.innerHTML = `Gender: <h4 class="innerText">${gender}</h4>`;
                // change height info
                let heightObj = document.querySelector('.char-height');
                let height = JSON.parse(JSON.stringify(char.height));
                heightObj.innerHTML = `Height: <h4 class="innerText">${height}</h4>`;
                // change mass info
                let massObj = document.querySelector('.char-mass');
                let mass = JSON.parse(JSON.stringify(char.mass));
                massObj.innerHTML = `Mass: <h4 class="innerText">${mass}</h4>`;
                // change hair info
                let hairObj = document.querySelector('.char-hair');
                let hair = JSON.parse(JSON.stringify(char.hair_color));
                hairObj.innerHTML = `Hair Color: <h4 class="innerText">${hair}</h4>`;
                // change skin info
                let skinObj = document.querySelector('.char-skin');
                let skin = JSON.parse(JSON.stringify(char.skin_color));
                skinObj.innerHTML = `Skin Color: <h4 class="innerText">${skin}</h4>`;
                // change eye info
                let eyeObj = document.querySelector('.char-eye');
                let eye = JSON.parse(JSON.stringify(char.eye_color));
                eyeObj.innerHTML = `Eye Color: <h4 class="innerText">${eye}</h4>`;
                
                // change films info
                let filmObj = document.querySelector('.char-films');
                filmObj.innerHTML = `Films: `;
                let filmList = char.films;
                let indx = 1;
                filmList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((film) => {
                            let filmTitle = JSON.parse(JSON.stringify(film.title));
                            let link = JSON.parse(JSON.stringify(film.url));
                            filmObj.innerHTML += `<h4 class="innerText">(${indx}) ${filmTitle}  </h4>`;
                            indx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

function changeCharNext(){
    if (currNum != 83){
        if (currNum == 82){
            currNum = 1;
        } else {
            currNum += 1;
        }
        let url = `https://swapi.dev/api/people/${currNum}/`;
        fetch(url)
            .then((resp) => {
                if (!resp.ok) throw new Error(resp.statusText);                
                return resp.json();
            })
            .then((char) => {
                // change name
                let nameObj = document.querySelector('.char-name2');
                let name = JSON.parse(JSON.stringify(char.name));
                nameObj.innerHTML = `${name}`;
                // change birth info
                let birthObj = document.querySelector('.char-birth');
                let birth = JSON.parse(JSON.stringify(char.birth_year));
                birthObj.innerHTML = `Born: <h4 class="innerText">${birth}</h4>`;

                //species
                let speciesObj = document.querySelector('.char-species');
                speciesObj.innerHTML = `Species: <h4 class="innerText">Human</h4>`;
                let speciesLink = JSON.parse(JSON.stringify(char.species));
                console.log(speciesLink);
                let specie;
                fetch(speciesLink)
                    .then((resp) => {
                        if (!resp.ok) throw new Error(resp.statusText);                
                        return resp.json();
                    })
                    .then((specy) => {
                        specie = JSON.parse(JSON.stringify(specy.name));
                        speciesObj.innerHTML = `Species: <h4 class="innerText">${specie}</h4>`;
                    })
                    .catch((err) => {
                        console.error(err);
                    })

                // change gender info
                let genderObj = document.querySelector('.char-gender');
                let gender = JSON.parse(JSON.stringify(char.gender));
                genderObj.innerHTML = `Gender: <h4 class="innerText">${gender}</h4>`;
                // change height info
                let heightObj = document.querySelector('.char-height');
                let height = JSON.parse(JSON.stringify(char.height));
                heightObj.innerHTML = `Height: <h4 class="innerText">${height}</h4>`;
                // change mass info
                let massObj = document.querySelector('.char-mass');
                let mass = JSON.parse(JSON.stringify(char.mass));
                massObj.innerHTML = `Mass: <h4 class="innerText">${mass}</h4>`;
                // change hair info
                let hairObj = document.querySelector('.char-hair');
                let hair = JSON.parse(JSON.stringify(char.hair_color));
                hairObj.innerHTML = `Hair Color: <h4 class="innerText">${hair}</h4>`;
                // change skin info
                let skinObj = document.querySelector('.char-skin');
                let skin = JSON.parse(JSON.stringify(char.skin_color));
                skinObj.innerHTML = `Skin Color: <h4 class="innerText">${skin}</h4>`;
                // change eye info
                let eyeObj = document.querySelector('.char-eye');
                let eye = JSON.parse(JSON.stringify(char.eye_color));
                eyeObj.innerHTML = `Eye Color: <h4 class="innerText">${eye}</h4>`;

                // change films info
                let filmObj = document.querySelector('.char-films');
                filmObj.innerHTML = `Films: `;
                let filmList = char.films;
                let indx = 1;
                filmList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((film) => {
                            let filmTitle = JSON.parse(JSON.stringify(film.title));
                            let link = JSON.parse(JSON.stringify(film.url));
                            filmObj.innerHTML += `<h4 class="innerText">(${indx}) ${filmTitle}  </h4>`;
                            indx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }
}