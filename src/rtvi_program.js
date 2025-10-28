class rtvi_program{
    constructor(){
        this.api = "https://rtvi.tv/local/tools/.ajax"
    }
    async rtvi(country,utc,day,month,year){
        let req=await fetch(`${this.api}/tv-program.php?country=${country}&utc=${utc}&date%5Bday%5D=${day}&date%5Bmonth%5D=${month}&date%5Byear%5D=${year}`,{method:"GET"});
        return await req.json();
    }
    async rtvi_retro(country,utc,day,month,year){
        let req=await fetch(`${this.api}/tv-program-archive.php?country=${country}&utc=${utc}&date%5Bday%5D=${day}&date%5Bmonth%5D=${month}&date%5Byear%5D=${year}`,{method:"GET"});
        return await req.json();
    }
}
module.exports = {rtvi_program};