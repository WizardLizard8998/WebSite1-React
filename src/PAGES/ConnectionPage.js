/*
const sql = require("mssql");

function ConnectionPage(){

    const deneme = 
    async () => {
      try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(
          "workstation id=BLOGPAGE.mssql.somee.com;packet size=4096;user id=Kerem;pwd=21aea-X!;data source=BLOGPAGE.mssql.somee.com;persist security info=False;initial catalog=BLOGPAGE"
        );
        const result = await sql.query`select * from BLOG`;
        console.dir(result);
      } catch (err) {
        // ... error checks
      }
    };

    return <>{deneme}</>
}

export default ConnectionPage;
*/
/*
var express = require("express");
var router = express.Router();
var sql = require("mssql");

const config =
  "workstation id=BLOGPAGE.mssql.somee.com;packet size=4096;user id=Kerem;pwd=21aea-X!;data source=BLOGPAGE.mssql.somee.com;persist security info=False;initial catalog=BLOGPAGE";

/* GET users listing. */
/*
router.get("/api/", (req, res, next) => {
  res.send("respond with a resource");
});

router.get("/api/blog", async (req, res, next) => {
  let pool = await sql.connect(config);

  let result = await pool.request().query("SELECT * from BLOG");

  res.send(JSON.stringify(result));
});

module.export = router;
*/
