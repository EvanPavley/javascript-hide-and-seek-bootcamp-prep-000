function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const n = getFirstSelector('#nested')
  return n.querySelector('.target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    // lis[i].innerHTML = (i + 1 + n).toString();
    const liNum = parseInt(lis[i].innerHTML);
    lis[i].innerHTML = (liNum + n).toString();
  }
}

function deepestChild() {
  const gn = document.querySelector('#grand-node')
  const divs = gn.getElementsByTagName('div')
  const deepest = divs[divs.length - 1];
  return deepest
}
