const cvContent = document.querySelector('.cv-content');
const loading = document.querySelector('.loading')

async function getData(url) {
    const response = await fetch(url);
    console.log(response);

    if(response.ok) {
        const data = await response.json();
        console.log(data);
        
        loading.innerHTML = '';

        return data;
    } else {
        console.log('HTTP-Error: ' + response.status);
    }
};

async function getCV(url) {
    const cvData = await getData(url);

    console.log(cvData)
    console.log('================')

    const cvKeys = Object.keys(cvData)

    cvKeys.forEach(element => {
        const cvKey = cvData[element];

        const cvContentDiv = document.createElement('div');
        cvContentDiv.setAttribute('class', 'cv-content-items')
        cvContentDiv.insertAdjacentHTML('beforeend', `<div class="fa ${cvKey.icon} fa-2x"></div>`);
        cvContentDiv.insertAdjacentHTML('beforeend', `<h2>${cvKey.title}</h2>`);

        if (typeof cvKey.content[0] === 'object') {
            cvKey.content.forEach(element => {
                cvContentDiv.insertAdjacentHTML('beforeend', `<p>${element.type}</p>`);
                cvContentDiv.insertAdjacentHTML('beforeend', `<p>${element.timespan}</p>`);
                cvContentDiv.insertAdjacentHTML('beforeend', `<small>${element.extra}</small>`);
            })
        } else {
            const competenciesList = document.createElement('ul');

            cvKey.content.forEach(element => {
                competenciesList.insertAdjacentHTML('beforeend', `<li>${element}</li>`);
            })
            
            cvContentDiv.appendChild(competenciesList);
        };

        cvContent.appendChild(cvContentDiv);
    });
}

getCV('cv.json')