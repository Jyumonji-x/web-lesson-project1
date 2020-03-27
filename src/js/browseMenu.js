
/*菜单二级联动*/
function selectCity() {
    let countries = [['Filter by City', 'Shanghai', 'Kunming', 'Beijing', 'Yantai'],
        ['Filter by City', 'Tokyo', 'Osaka', 'Kamakura'],
        ['Filter by City', 'Roma', 'Milan', 'Venice', 'Florence'],
        ['Filter by City', 'New York', 'San Francisco', 'Washington']];
    const countryInfo = document.form1.country;
    const cityInfo = document.form1.city;
    const selectParam = countries[countryInfo.selectedIndex - 1];
    /*只留下第一个不变*/
    cityInfo.length = 1;
    for (let i = 0; i < selectParam.length; i++) {
        /*第一个selectParam[i]表示城市option中的value，第二个selectParam[i]表示文本*/
        cityInfo[i] = new Option(selectParam[i], selectParam[i]);
    }
}