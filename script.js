let xhr = new XMLHttpRequest();
//console.log(xhr); //object
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);

  console.log(
    `/////////////////////////////////////////////////////
  ////Get all the countries from Asia continent /region using Filter function
  //////////////////////////////////////////////////////`
  );
  const asiancountries = data
    .filter((e) => {
      return e.continents[0] === "Asia";
    })
    .map((countries) => {
      return countries.name.official;
    });
  console.log("asiancountries", asiancountries);

  console.log(
    `/////////////////////////////////////////////////////
  ////Get all the countries with a population of less than 2 lakhs using Filter function
  /////////////////////////////////////////////////////`
  );
  const countrieslessthan2lakh_population = data
    .filter((e) => {
      return e.population < 200000;
    })
    .map((countries) => {
      return countries.name.official;
    });
  console.log(countrieslessthan2lakh_population);

  console.log(`/////////////////////////////////////////////////////
  ////Print the following details name, capital, flag, using forEach function
  /////////////////////////////////////////////////////`);
  data.forEach((value, index) => {
    console.log(
      `******** NAME - ${value.name.official}  ****** CAPITAL-${value.capital}   ******** FLAG-${value.flag} `
    );
  });
  console.log(`/////////////////////////////////////////////////////
    "Print the total population of countries using reduce function"
    /////////////////////////////////////////////////////`);
  const totalpopulation = data.reduce((accumulator, value) => {
    return (accumulator += value.population);
  }, 0);
  console.log("totalpopulation", totalpopulation);

  console.log(
    `/////////////////////////////////////////////////////
    Print the country that uses US dollars as currency.
    /////////////////////////////////////////////////////`
  );
  const countriesusingUSdollars = data
    .filter((value) => {
      if (value.currencies) {
        return (
          Object.values(value.currencies)[0].name === "United States dollar"
        );
      }
    })
    .map((e) => e.name.official);
  console.log(countriesusingUSdollars);
};
