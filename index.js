function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let element = document.getElementById('grand-node');
  let has_child = element.children[0];

  while (has_child) {
    element = element.children[0];
    has_child = element.children[0];
  }

  return element;
}

function increaseRankBy(n) {
  let rankedLists = document.getElementsByClassName('ranked-list');

  for (let i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children;

    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}