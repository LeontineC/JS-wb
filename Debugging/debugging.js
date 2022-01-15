const people = [
    { name: 'Wes', cool: true, country: 'Canada' },
    { name: 'Scott', cool: true, country: 'Merica' },
    { name: 'Snickers', cool: false, country: 'Dog Country' },
  ];

  console.table(people);
  
  /*people.forEach((person, index) => {
    console.log(person.name);
    console.info(person);
    if (person.name === 'Snickers') {
        console.error('uhm...sounds like a canine');
    }
    if (person.country === 'Merica') {
        console.warn('uhm...check your spelling');
    }
    console.groupCollapsed(`${person.name}`);
    console.log(person.country);
    console.log(person.cool);
    console.log('finito');
    console.groupEnd(`${person.name}`);
    
  }); */
  
  // Console Methods
  
  // Callstack
  
  // Grabbing Elements
  //in devtools select element then in console $0 is last element
  //selected  $1 one before last etc...
  //also in console $('p') selects first p element
  // $$('p') selects all p elements
  
  // Breakpoints
  //write debugger; in function (or anywhere page) will pause it in devtools  sources
  // sources page shows files in use can click in file line you want to pause

  // Scope
  
  // Network Requests
  //network tab devtools


  // Break On Attribute
  // elements right-click - break on -attribute modifications
  // sources can select breakpoints
  
  // Some Setup Code

  function doALotOfStuff() {
      console.group('doing stuff');
      console.log('yo dee yo');
      console.warn('warning!!!');
      console.error('mistake!!!');
      console.groupEnd('doing stuff');
  }
  doALotOfStuff();


  function doctorize(name) {
      console.count('running the function doctorize');
    return `Dr. ${name}`;
  }
  
  function greet(name) {
    doesntExist();
    return `Hello ${name}`;
  }
  
  function go() {
    const name = doctorize(greet('Wes'));
    console.log(name);
  }
  
  const button = document.querySelector('.bigger');
  button.addEventListener('click', function(e) {
    const newFontSize =
      parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
    e.currentTarget.style.fontSize = `${newFontSize}px`;
  });
  
  // A Dad joke fetch
  async function fetchDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'text/plain',
      },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
  }