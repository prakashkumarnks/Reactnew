var express 		= require('express');
var bodyParser	 	= require('body-parser');
var cookieParser 	= require('cookie-parser');
var session 		= require('express-session');
var multer			= require('multer');
var formidable 		= require('formidable');
var fs 				= require('fs');
var path 			= require('path');
var app 			= express();

const  Model 		= require('./Model/QueryDb');
const  common 		= require('./Common/common');

let Db = new Model();
var commonobj = new common();





//app.use(express.bodyParser({ uploadDir:__dirname + 'E:/reactlogin/server/uploadmultiple/' }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
	// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,
	// Content-Type, Accept");
	// Pass to next layer of middleware
	next();
});





var storage = multer.diskStorage({
	  destination: function (req, file, cb) {
		  console.log(file);
	    cb(null, 'E:/reactlogin/server/uploadmultiple/')
	  },
	  filename: function (req, file, cb) {
	    cb(null, file.fieldname + '-' + Date.now())
	  }
	})
	
var upload = multer({ storage: storage   })
 //console.log(upload);
//var upload = multer({ dest: 'E:/reactlogin/server/uploadmultiple/' });

//upload.single('myFile');
 //upload.fields([{ name: 'filesss', maxCount: 1 ,  p : 1  } ])
app.post('/myform',upload.fields([{ name: 'filesss', maxCount: 2 } ]),  (req, res, next) => {  // correct
///app.post('/myform', function (req, res, next) {
	
//	res.send("File is uploaded");
	var a = req.body.a;
	var b = req.body.b;
	var RfId = req.body.RfId;
	
//	console.log(req.file.filename);
	//console.log(req.files.filesss[0].filename);
	if(!a)
	{
		res.send({ id : 'a',ErrorMessage : "Please enter a"});
		return false;
	}
	
	if(!b)
	{
		res.send({ id : 'b',ErrorMessage : "Please enter b"});
		return false;
	}
	
	
	if(RfId)
		{
			 Db.RunQuery('update test set b = "'+a+'" , c = "'+b+'"  where a = '+RfId+' ').then(rowssec => {
				 res.send({success : "success" , message:"updated ", rowssec : rowssec });
			});
		}
		
	else
		{
			 Db.RunQuery('insert into test(b,c) values("'+a+'","'+b+'")').then(rowssec => {
				  res.send({success : "success" , message:"inserted ", rowssec : rowssec });
			 });
		}
})



var mv = require('mv');
app.post('/formidable',  (req, res, next) => {
	
	
	/*new formidable.IncomingForm().parse(req)
    .on('filetoupload', (name, field) => {
      console.log('Field', name, field)
      ///fields.push([field, value]);
    })
    .on('file', (name, file) => {
      console.log('Uploaded file', name, file)
      //files.push([field, file]);
    })
    .on('aborted', () => {
      console.error('Request aborted by the user')
    })
    .on('error', (err) => {
      console.error('Error', err)
      throw err
    })
    .on('end', () => {
      res.end()
    })*/
	
	
	var commonobj = new common();
	//commonobj.mupload(req, res,'filesss');
	commonobj.mupload(req, res,'filetoupload');
	 //console.log(req);
	/*var form = new formidable.IncomingForm();
	console.log("About to parse...");
	form.parse(form, function(error, fields, files) {
		
		 console.log(fields);
	 });*/
	/* console.log(req.body.a);
	var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'E:/reactlogin/server/uploadmultiple/' + files.filetoupload.name;
      
     // console.log(oldpath);
      mv(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();	
      });
   });*/
	
	
/*	 var form = new formidable.IncomingForm(),
	    files = [],
	    fields = [];
	 
	 form.uploadDir = __dirname + '/uploads';
		//console.log(form.uploadDir);
	 
	    form.on('filetoupload', function(field, value) {
	        fields.push([field, value]);
	    })
	    form.on('file', function(field, file) {
	       console.log(file.name);
	        files.push([field, file]);
	    })
	    form.on('end', function() {
	        console.log('done');
	        res.end('File uploaded and moved!');
	      //  res.redirect('/forms');
	    });
	    form.parse(req);*/
    

	
});

app.post('/chech', function (req, res) {
	var commonobj = new common();
	var s = commonobj.InsertDateFormat("9.9.2017");
	var v = commonobj.DispDateFormat("2017.9.9");
	res.send({ InsertDateFormat: s, DispDateFormat: v });
});


app.post('/data', function (req, res) {

	// var commonnew = new common();
	let trans_Andriodhomepageimage = Db.SelectRecBySp("SELECT * FROM bind_activestatus");
	var bind_gender = Db.SelectRecBySp('SELECT * FROM bind_gender');
	var time = Db.myDateTime();
	var timesec = Db.myDateTime();

	res.send({ artist: time, music: trans_Andriodhomepageimage, bind_gender: bind_gender, timesec: timesec });
	// Db.RunQuery("insert into test(b,c) values(1,2)");
	// Db.RunQuery("insert into test(b,c) values(1,2)");
});

app.post('/bindmaster_state', function (req, res) {

	// var commonnew = new common();
	///let bindmaster_state = Db.SelectRecBySp("");
	var sql = "SELECT state_id as value,state_Name as label FROM bindmaster_state";
	Db.query(sql).then(rows => {
		res.send({ bindmaster_state : rows});
	});
});


app.post('/statevsdistict', function (req, res, next) {
	var sql = "SELECT district_id as value, district_Name as label FROM bindmaster_district where  IsActive = 1 ";
	let state = req.body.state;

	if (state)
		sql += ' and  state_id = ' + state + ' ';

	Db.query(sql).then(rows => {
		Db.query('SELECT * FROM bind_activestatus').then(rowssec => {
			res.send({ ss: state, message: rows });
		});

	});
});









app.post('/editupdate', function (req, res, next) {
	
	let start = req.body.start;
	let RfId = req.body.RfId;

	var sql = "SELECT * FROM test";
	if (RfId)
		sql += ' where  a = ' + RfId + ' ';

	if (!RfId)
		sql += ' limit ' + start * 10 + ',10 ';
		
//	console.log(sql);
	Db.query(sql).then(rowssec => {
		Db.numRows("SELECT *  FROM test").then(totalCount => {
			res.send({data : rowssec , totalCount : totalCount});
		
		});	
	});

});



app.get('/', function (req, res) {
	res.send('Hello Worldaaa');
})


app.post('/Fillddl',upload.none(), function (req, res) {

var Query = req.body.Query;
console.log(req.body.Query);
//res.send(Query);
Db.query(Query).then(data =>{
			res.send(data);

	});
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on ${PORT}`))