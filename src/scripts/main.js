'use strict';

const li = document.querySelectorAll('li');

function sortList(list) {
  const resultList = Array.from(list).sort((firstPerson, secondPerson) => {
    const firstPersonSalary = parseSalary(firstPerson.dataset.salary);
    const secondPersonSalary = parseSalary(secondPerson.dataset.salary);

    return Number(secondPersonSalary) - Number(firstPersonSalary);
  });

  for (const result of resultList) {
    list[0].parentNode.append(result);
  }

  return resultList;
}

function getEmployees(list) {
  const arraysPersons = [];

  for (const oneLi of list) {
    arraysPersons.push({
      name: oneLi.textContent,
      position: oneLi.dataset.position,
      salary: parseSalary(oneLi.dataset.salary),
      age: oneLi.dataset.age,
    });
  }

  return arraysPersons;
}

sortList(li);
getEmployees(li);

function parseSalary(str) {
  return str.slice(1).split(',').join('.');
}
