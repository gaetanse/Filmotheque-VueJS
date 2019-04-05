import UtilTab from '../../src/models/UtilTab.js'

test('Exemple de test d\'une fonction', () => {
    const tab = ['testA', 'testB']
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testA</td>');
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testB</td>');
});

test('Exemple de test d\'une fonction', () => {
    const tab = ['testA', 'testB']
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testA</td>');
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testB</td>');
});

test('Exemple de test d\'une fonction', () => {
    const tab = ['testA', 'testB']
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testA</td>');
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testB</td>');
});


