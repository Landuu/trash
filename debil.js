
const calculateHeight = () => {
    const table = tableRef.current;

    // Height of header + table padding + safe margin in px
    const headerHeight = 60;
    const gridMaxHeight = window.innerHeight - headerHeight;
    let heightSum = 0;
    let index = 0;

    // Pytanie specjalne: (spędziłem 30min na debugowanie tego)
    // Da się to jakoś ładnej napisać?
    // Jeżeli suma > max, to znaczy, że poprzedni element powinien być ostatnim jaki się kwalifikuje
    // dlatego index--
    for(const row of table.rows) {
        heightSum += row.offsetHeight;
    
        if(heightSum > gridMaxHeight) {
            // Nie było wczesniej tego ifa i zastanawiałem się czemu to źle działa
            if(index > 0) index--;
            break;
        }
        
        index++;
    }
    
    setFirstTable(shipments.slice(0, index));
    setSecondTable(shipments.slice(index));
}
