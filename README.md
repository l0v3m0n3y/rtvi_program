# rtvi_program
JavaScript library to get the RTVI schedule
# main
```js
async function main(){
    const {rtvi_program} = require('./rtvi_program');
    const program= new rtvi_program();
    //utc+3
    let req=await program.rtvi("1","UTC%2B03","3","8","2024")
    console.log(req)
}
main()
```
