import UtilTab from '../../src/models/UtilTab.js'

test('Fonction de TEST n*1', () => {
    const tab = ['testA', 'testB'];
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testA</td>');
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testB</td>');
});

test('Fonction de TEST n*2', () => {
    const tab = ['testA', 'testB'];
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testA</td>');
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testB</td>');
});

test('Fonction de TEST n*3', () => {
    const tab = ['testA', 'testB'];
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testA</td>');
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testB</td>');
});


