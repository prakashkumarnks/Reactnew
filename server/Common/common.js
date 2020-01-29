var multer = require('multer');
var mv = require('mv');
var formidable 		= require('formidable');
class common {
	constructor() {
	}

	
	mupload(req, res,filedname)
	{
		var form = new formidable.IncomingForm(),
	    files = [],
	    fields = [];
	 
	// form.uploadDir = __dirname + '/uploadmultiple';
		//console.log(form.uploadDir);
		 form.uploadDir =  'E:/reactlogin/server/uploadmultiple/';
	    form.on(filedname, function(field, value) {
	        fields.push([field, value]);
	    })
	    form.on('file', function(field, file) {
	       console.log([field.name, file]);
	        files.push([field.name, file]);
	    })
	    form.on('end', function() {
	        console.log('done');
	        res.end('File uploaded and moved!');
	      //  res.redirect('/forms');
	    });
	    form.parse(req);
	}
	
	
	storage(imagename, maxcount, directory, req, res) {
		try {
			var storagesss = multer.diskStorage({
				destination: function (req, file, callback) {
					var uploadPath = __dirname + directory;

					callback(null, uploadPath);
				},
				// Match the field name in the request body
				filename: function (req, file, callback) {
					callback(null, file.fieldname + '-' + Date.now());
				}
			});
			return storagesss;
		} catch (ex) {
			console.log("Error :\n" + ex);
		}
	}

	check(a) {
		return 2 * a;
	}

	DispDateFormat(date)
	{
			var date = date.replace(/[/.]/g, "-");
			var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

			if (month.length < 2)
				month = '0' + month;
			if (day.length < 2)
				day = '0' + day;
				d = day+'-'+month+'-'+year;
			return d;
	}
	
	InsertDateFormat(date)
	{
		var date = date.replace(/[/.]/g, "-");
		var datea = date.split("-");
		var day = datea[0];
		var month = datea[1];
		var year =datea[2];
		if (month.length < 2)
			month = '0' + month;
		if (day.length < 2)
			day = '0' + day;
		date = year+'-'+month+'-'+day;
		return date;
		
	}

}
module.exports = common;