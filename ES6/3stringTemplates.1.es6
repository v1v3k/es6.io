var dict = {
    HTML: 'Hyper Text Markup Language',
    CSS: 'Cascading Style Sheets',
    JS: 'JavaScript'
};

function addAbbreviations(strings, ...values) {
    console.log(values);
    console.log(strings);
    var abbreviated = values.map(value => {
        if(dict[value]) {
        return `<abbr title="${dict[value]}">${value}</abbr>`
        }
        return value;
    });
    console.log(abbreviated);

    return strings.reduce((sentence, string, i) => {
        console.log(sentence + string + (abbreviated[i] || ''));
        return sentence + string + (abbreviated[i] || '');
    }, '');
}

var first = 'Wes';
var last = 'Bos';
var sentence = addAbbreviations`Hi my name is ${first} ${last} and I love to code ${'JS'}, ${'HTML'} and ${'CSS'} all day and all night long!`
