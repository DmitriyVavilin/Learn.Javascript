/*Решение задачи 1
==================*/

const tableNode = document.querySelector('.js-table')
for(let i = 0; i < tableNode.rows.length; i++) {
    let row = tableNode.rows[i]
    row.cells[i].style.background = 'red'
}


/*Решение задачи 2
==================*/
/*for(let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data
    title = title.trim()
    let input = li.getElementsByTagName('li').length
    alert(title + ': ' + input)
}*/

/* //Решение задачи 2
==================*/

/*Решение задачи 3
==================*/
let links = document.querySelectorAll('li>a.js-link');
for (let link of links) {
    let href = link.getAttribute('href');

    if (!href) continue;

    if (!href.includes('://')) continue;

    if (href.startsWith('http://internal.com')) continue;

    link.style.color = 'orange'
}

/* //Решение задачи 3
==================*/