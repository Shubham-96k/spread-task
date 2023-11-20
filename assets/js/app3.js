const cl = console.log;

const spread = document.getElementById("spread");
cl(spread);


spread.innerHTML = [...spread.innerText].map(ele => `<span>${ele}</span>`).join(" ");//shortest way


// let result = [...spread.innerText].map(ele => `<span>${ele}</span>`).join(" ");

// spread.innerHTML = result;

// #######################################################################################

// let innertext = spread.innerText;
// cl(innertext);//here we get the innertext of paragraph 

// let split = [...innertext];
// cl(split);//also can do it by split method // then we spread and packed in array 

// const array = split.map(ele => {
//     return `<span>${ele}</span>`
// });//here, we wrap each element in span

// cl(array);

// let result = array.join(" ");
// cl(result);// we converted array to string in order to show in ui and in html file

// spread.innerHTML = result;