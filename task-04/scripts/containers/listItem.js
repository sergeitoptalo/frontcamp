export function renderListItem(list) {
    let listItemElement = document.createElement('li');
    let listItem = list.appendChild(listItemElement);

    return listItem;
}
