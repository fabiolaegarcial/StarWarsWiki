var currNum = 1;

var startupFilm = function(currNum){
    if (currNum != 0){
        let url = `https://swapi.dev/api/films/${currNum}/`;
        fetch(url)
            .then((resp) => {
                if (!resp.ok) throw new Error(resp.statusText);                
                return resp.json();
            })
            .then((filmy) => {
                // change name
                let titleObj = document.querySelector('.char-name2');
                let title = JSON.parse(JSON.stringify(filmy.title));
                titleObj.innerHTML = `${title}`;
                // change director 
                let dirObj = document.querySelector('.film-director');
                let dir = JSON.parse(JSON.stringify(filmy.director));
                dirObj.innerHTML = `Director: <h4 class="innerText">${dir}</h4>`;
                // change producer 
                let prodObj = document.querySelector('.film-producer');
                let producer = JSON.parse(JSON.stringify(filmy.producer));
                prodObj.innerHTML = `Producer(s): <h4 class="innerText">${producer}</h4>`;
                // change release date
                let relObj = document.querySelector('.film-release');
                let rel = JSON.parse(JSON.stringify(filmy.release_date));
                relObj.innerHTML = `Released: <h4 class="innerText">${rel}</h4>`;

                // change characters
                let charObj = document.querySelector('.film-characters');
                charObj.innerHTML = `Characters: `;
                let charList = filmy.characters;
                let cIndx = 1;
                charList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((char) => {
                            let charName = JSON.parse(JSON.stringify(char.name));
                            charObj.innerHTML += `<h4 class="innerText">(${cIndx}) ${charName}  </h4>`;
                            cIndx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });

                // change plantets
                let planObj = document.querySelector('.film-planets');
                planObj.innerHTML = `Planets: `;
                let planList = filmy.planets;
                let pIndx = 1;
                planList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((planet) => {
                            let planName = JSON.parse(JSON.stringify(planet.name));
                            planObj.innerHTML += `<h4 class="innerText">(${pIndx}) ${planName}  </h4>`;
                            pIndx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });

                // // change starships
                let starObj = document.querySelector('.film-starships');
                starObj.innerHTML = `Starships: `;
                let starList = filmy.starships;
                let sIndx = 1;
                starList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((starship) => {
                            let starName = JSON.parse(JSON.stringify(starship.name));
                            starObj.innerHTML += `<h4 class="innerText">(${sIndx}) ${starName}  </h4>`;
                            sIndx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });

                // change vehicles
                let vehObj = document.querySelector('.film-vehicles');
                vehObj.innerHTML = `Vehicles: `;
                let vehList = filmy.vehicles;
                let vIndx = 1;
                vehList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((vehicle) => {
                            let vehName = JSON.parse(JSON.stringify(vehicle.name));
                            vehObj.innerHTML += `<h4 class="innerText">(${vIndx}) ${vehName}  </h4>`;
                            vIndx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });
                
                // change opening crawl
                let openObj = document.querySelector('.film-opening');
                let open = JSON.parse(JSON.stringify(filmy.opening_crawl));
                openObj.innerHTML = `Opening Crawl: <h4 class="innerText"> <i>"${open}"</i> </h4>`;
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

function changeFilmPrev(){
    if (currNum != 0){
        if (currNum == 1){
            currNum = 6;
        } else {
            currNum -= 1;
        }
        let url = `https://swapi.dev/api/films/${currNum}/`;
        fetch(url)
            .then((resp) => {
                if (!resp.ok) throw new Error(resp.statusText);                
                return resp.json();
            })
            .then((filmy) => {
                // change name
                let titleObj = document.querySelector('.char-name2');
                let title = JSON.parse(JSON.stringify(filmy.title));
                titleObj.innerHTML = `${title}`;
                // change director 
                let dirObj = document.querySelector('.film-director');
                let dir = JSON.parse(JSON.stringify(filmy.director));
                dirObj.innerHTML = `Director: <h4 class="innerText">${dir}</h4>`;
                // change producer 
                let prodObj = document.querySelector('.film-producer');
                let producer = JSON.parse(JSON.stringify(filmy.producer));
                prodObj.innerHTML = `Producer(s): <h4 class="innerText">${producer}</h4>`;
                // change release date
                let relObj = document.querySelector('.film-release');
                let rel = JSON.parse(JSON.stringify(filmy.release_date));
                relObj.innerHTML = `Released: <h4 class="innerText">${rel}</h4>`;

                // change characters
                let charObj = document.querySelector('.film-characters');
                charObj.innerHTML = `Characters: `;
                let charList = filmy.characters;
                let cIndx = 1;
                charList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((char) => {
                            let charName = JSON.parse(JSON.stringify(char.name));
                            charObj.innerHTML += `<h4 class="innerText">(${cIndx}) ${charName}  </h4>`;
                            cIndx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });

                // change plantets
                let planObj = document.querySelector('.film-planets');
                planObj.innerHTML = `Planets: `;
                let planList = filmy.planets;
                let pIndx = 1;
                planList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((planet) => {
                            let planName = JSON.parse(JSON.stringify(planet.name));
                            planObj.innerHTML += `<h4 class="innerText">(${pIndx}) ${planName}  </h4>`;
                            pIndx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });

                // // change starships
                let starObj = document.querySelector('.film-starships');
                starObj.innerHTML = `Starships: `;
                let starList = filmy.starships;
                let sIndx = 1;
                starList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((starship) => {
                            let starName = JSON.parse(JSON.stringify(starship.name));
                            starObj.innerHTML += `<h4 class="innerText">(${sIndx}) ${starName}  </h4>`;
                            sIndx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });

                // change vehicles
                let vehObj = document.querySelector('.film-vehicles');
                vehObj.innerHTML = `Vehicles: `;
                let vehList = filmy.vehicles;
                let vIndx = 1;
                vehList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((vehicle) => {
                            let vehName = JSON.parse(JSON.stringify(vehicle.name));
                            vehObj.innerHTML += `<h4 class="innerText">(${vIndx}) ${vehName}  </h4>`;
                            vIndx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });
                
                // change opening crawl
                let openObj = document.querySelector('.film-opening');
                let open = JSON.parse(JSON.stringify(filmy.opening_crawl));
                openObj.innerHTML = `Opening Crawl: <h4 class="innerText"> <i>"${open}"</i> </h4>`;
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

function changeFilmNext(){
    if (currNum != 7){
        if (currNum == 6){
            currNum = 1;
        } else {
            currNum += 1;
        }
        let url = `https://swapi.dev/api/films/${currNum}/`;
        fetch(url)
            .then((resp) => {
                if (!resp.ok) throw new Error(resp.statusText);                
                return resp.json();
            })
            .then((filmy) => {
                // change name
                let titleObj = document.querySelector('.char-name2');
                let title = JSON.parse(JSON.stringify(filmy.title));
                titleObj.innerHTML = `${title}`;
                // change director 
                let dirObj = document.querySelector('.film-director');
                let dir = JSON.parse(JSON.stringify(filmy.director));
                dirObj.innerHTML = `Director: <h4 class="innerText">${dir}</h4>`;
                // change producer 
                let prodObj = document.querySelector('.film-producer');
                let producer = JSON.parse(JSON.stringify(filmy.producer));
                prodObj.innerHTML = `Producer(s): <h4 class="innerText">${producer}</h4>`;
                // change release date
                let relObj = document.querySelector('.film-release');
                let rel = JSON.parse(JSON.stringify(filmy.release_date));
                relObj.innerHTML = `Released: <h4 class="innerText">${rel}</h4>`;

                // change characters
                let charObj = document.querySelector('.film-characters');
                charObj.innerHTML = `Characters: `;
                let charList = filmy.characters;
                let cIndx = 1;
                charList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((char) => {
                            let charName = JSON.parse(JSON.stringify(char.name));
                            charObj.innerHTML += `<h4 class="innerText">(${cIndx}) ${charName}  </h4>`;
                            cIndx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });

                // change plantets
                let planObj = document.querySelector('.film-planets');
                planObj.innerHTML = `Planets: `;
                let planList = filmy.planets;
                let pIndx = 1;
                planList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((planet) => {
                            let planName = JSON.parse(JSON.stringify(planet.name));
                            planObj.innerHTML += `<h4 class="innerText">(${pIndx}) ${planName}  </h4>`;
                            pIndx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });

                // // change starships
                let starObj = document.querySelector('.film-starships');
                starObj.innerHTML = `Starships: `;
                let starList = filmy.starships;
                let sIndx = 1;
                starList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((starship) => {
                            let starName = JSON.parse(JSON.stringify(starship.name));
                            starObj.innerHTML += `<h4 class="innerText">(${sIndx}) ${starName}  </h4>`;
                            sIndx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });

                // change vehicles
                let vehObj = document.querySelector('.film-vehicles');
                vehObj.innerHTML = `Vehicles: `;
                let vehList = filmy.vehicles;
                let vIndx = 1;
                vehList.forEach(url => {
                    fetch(url)
                        .then((resp) => {
                            if (!resp.ok) throw new Error(resp.statusText);                
                            return resp.json();
                        })
                        .then((vehicle) => {
                            let vehName = JSON.parse(JSON.stringify(vehicle.name));
                            vehObj.innerHTML += `<h4 class="innerText">(${vIndx}) ${vehName}  </h4>`;
                            vIndx++;
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                });
                
                // change opening crawl
                let openObj = document.querySelector('.film-opening');
                let open = JSON.parse(JSON.stringify(filmy.opening_crawl));
                openObj.innerHTML = `Opening Crawl: <h4 class="innerText"> <i>"${open}"</i> </h4>`;
            })
            .catch((err) => {
                console.error(err);
            })
    }
}