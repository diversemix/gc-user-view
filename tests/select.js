Feature('Selecting a User');

Scenario('test select user', async I => {
    I.amOnPage('http://localhost:8080');
    I.seeElement('#search-text');
    I.seeElement('#search-button');
    I.seeNumberOfElements('.list-group-item', 0);
    I.fillField('#search-text', 'Leanne Graham');
    I.click('#search-button');
    I.waitForVisible('#search-button', 3);
    I.seeNumberOfElements('.list-group-item', 0);
});
