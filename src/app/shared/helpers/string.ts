export function convertStringToSlug(input : string):string{
    input = input.replace(/^\s+|\s+$/g, "");
    input = input.toLowerCase();

    keyTable.forEach(k => {
        input = input.replace(new RegExp(k.key, 'g'), k.resolver);
    });

    return input;
}

const keyTable : Keys[]= [
    {key:'á', resolver:'a'},
    {key:'å', resolver:'a'},
    {key:'à', resolver:'a'},
    {key:'ã', resolver:'a'},
    {key:'ä', resolver:'a'},
    {key:'â', resolver:'a'},
    {key:'é', resolver:'e'},
    {key:'è', resolver:'e'},
    {key:'ë', resolver:'e'},
    {key:'ê', resolver:'e'},
    {key:'ì', resolver:'i'},
    {key:'í', resolver:'i'},
    {key:'ï', resolver:'i'},
    {key:'î', resolver:'i'},
    {key:'ó', resolver:'o'},
    {key:'ò', resolver:'o'},
    {key:'ö', resolver:'o'},
    {key:'ô', resolver:'o'},
    {key:'ő', resolver:'o'},
    {key:'ù', resolver:'u'},
    {key:'ú', resolver:'u'},
    {key:'ü', resolver:'u'},
    {key:'ű', resolver:'u'},
    {key:'û', resolver:'u'},
    {key:'ñ', resolver:'n'},
    {key:'ç', resolver:'c'},
    {key:' ', resolver:'-'},
    {key:/\s+/g, resolver:''},
    {key:/\s+/g, resolver:''},
    {key:/[^a-z0-9 -]/g, resolver:''},
    /* RegEx do the following conversions:
    {key:'·', resolver:''},
    {key:'/', resolver:''},
    {key:'_', resolver:''},
    {key:':', resolver:''},
    {key:',', resolver:''},
    {key:';', resolver:''},
    {key:"'", resolver:''},
    */
];

interface Keys {
    key: string | RegExp;
    resolver: string;
}