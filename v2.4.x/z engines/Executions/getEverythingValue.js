module.exports = {
    type: 'awaited',
    name: 'getEverythingValue',
    code: `
$multi[$advancedTextSplit[$message[1];|;2];$hyMiner[hyminer.items.$advancedTextSplit[$message[1];|;1]]]  
`
}