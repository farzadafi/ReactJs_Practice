const removeColor = () => {
    let select = document.getElementById('colorSelect');
    let lastIndex = Number(select.options.length - 1 );
    select.remove(lastIndex);
}