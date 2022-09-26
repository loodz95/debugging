// let datapoints = [1200, 750, 775, 760, 2560];,
let datapoints = [0];
const dataCounts = datapoints.length;
const labels = ["graille", "flex"];
for (let i = 0; i < dataCounts; i++) {}

const data = {
  labels: labels,
  datasets: [
    {
      label: "Compte",
      data: datapoints,
      borderColor: "purple",
      fill: true,
      cubicInterpolationMode: "monotone",
    },
  ],
};
// </block:setup>
// <block:config:0>
const config = {
  type: "line",
  data: data,
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: true,
        //     text: "Chart.js Line Chart - Cubic interpolation mode",
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
};
//console.log(config);
/*Le contexte du canevas HTML */
let context = document.getElementById("myChart").getContext("2d");
//console.log(context);
/* Création du graphique */
let chart = new Chart(context, config);
//console.log(chart);

//
//temparature le montant  rajouter
//function addTemperature(time, temperature) {
/* Ajoute la valeur en X */
//config.data.labels.push(valueTitreAjout);
//console.log(temperature);
/* Ajoute la valeur */
//config.data.datasets[0].data.push(valueMontantAjout);
//console.log(temperature);
/* Rafraichir le graphique */
//
//}

// mon code :

let ajout = document.querySelector(".btSubmit");
ajout.addEventListener("click", (e) => {
  e.preventDefault();

  let grid = document.getElementById("TrueContainer");
  let montantAjout = document.getElementById("montant");
  let titreAjout = document.getElementById("titre");
  let descAjout = document.getElementById("desc");
  let valueMontantAjout = parseInt(montantAjout.value);
  let valueTitreAjout = titreAjout.value;
  let valueDescAjout = descAjout.value;
  let choixPlusMoins = document.getElementById("operator");
  let choixPlusMoinsValue = choixPlusMoins.value;
  let solde = document.getElementById("solde");
  // <block:setup:1>

  //condition qui permet de selectionner si les opérations sont du plus ou du moins
  if (choixPlusMoinsValue == "credit") {
    grid.innerHTML += `<div class="operation credit">
       <div class="grid-x grid-padding-x align-middle">
         <div class="cell shrink">
           <div class="picto">
             <img src="./assets/images/sac-dargent.png" alt="credit" />
           </div>
         </div>
         <div class="cell auto">
           <div>
           <h2>${valueTitreAjout}</h2>
           <small>${valueDescAjout}</small>
           </div>
         </div>
         <div class="cell small-3 text-right">
           <div>
           <p class="count">${valueMontantAjout}€</p>
             <small>100%</small>
           </div>
         </div>
       </div>`;
    config.data.labels.push(valueTitreAjout);
    config.data.datasets[0].data.push(valueMontantAjout);
    console.log(datapoints);
    sum = datapoints.reduce((a, b) => {
      return a + b;
    });

    console.log(sum);

    //sum = datapoints.reduce((a, b) => {
    //return a + b;
    //});
    //solde.innerHTML = sum;

    //update la courbe//
    chart.update();
  } else {
    grid.innerHTML += `<div class="operation debit">
          <div class="grid-x grid-padding-x align-middle">
            <div class="cell shrink">
              <div class="picto">
                <img src="./assets/images/depenses.png" alt="debit" />
              </div>
            </div>
            <div class="cell auto">
              <div>
                <h2>${valueTitreAjout}</h2>
                <small>${valueDescAjout}</small>
              </div>
            </div>
            <div class="cell small-3 text-right">
              <div>
                <p class="count">${valueMontantAjout}€</p>
                <small>37.5%</small>
              </div>
            </div>
          </div>
        </div>`;
    console.log(valueMontantAjout);
    //Permet d'ajouter les opérations en bas de page après avoir submit//
    config.data.labels.push(valueTitreAjout);
    config.data.datasets[0].data.push(valueMontantAjout);

    //additionne les nombres du tableau et le met dans le solde en haut//
    sum = datapoints.reduce((a, b) => {
      return a + b;
    });

    //update la courbe//
    chart.update();
  }
  solde.innerHTML = sum;
});
