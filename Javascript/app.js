/*Решение задачи 1
==================*/

let table = document.querySelector("body > div > div.after > table")
for(let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i]
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

