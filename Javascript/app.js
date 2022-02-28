/*Решение задачи 1
==================*/

let tableNode = document.body.getElementsByClassName('js-table')[0]
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

