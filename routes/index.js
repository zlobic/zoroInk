var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')
var bodyParser = require('body-parser')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var request = require("request")
 
const config = require("../config")

var emailZoro = require("../templates/emailZoro.js")

router.use(bodyParser.urlencoded({ extended: false })); 
router.use(bodyParser.json())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



router.post('/form', upload.single('image'), (req, res) => {
  
  function checkFile(){
    
    if (typeof req.file == 'undefined' ){
      filename = "NoAttachment.txt"
      content = "Hello"
      
    } else {
      filename = req.file.originalname
      content = req.file
      
    }
  }

  checkFile()


  var text = {name: req.body.name, 
              email: req.body.email,
              phone: req.body.phone,
              place : req.body.place,
              description: req.body.description
  }

  var smtpConfig = {
    service: 'Gmail',
    auth: {user: config.user,
           pass: config.pass
    }
  }
 
  let mailOptions = {
    from: "zoroinkappointm@gmail.com", // sender address
    to: "bureauzlobi@gmail.com", // list of receivers
    subject: 'Appointment: ZoroInk Website', 
    attachments: {filename: filename,
    content: content,
    pathname:  `../uploads/${filename}`},
    html: emailZoro(text).html// Subject line
  };  

  

  var transporter = nodemailer.createTransport(smtpConfig);
    transporter.sendMail(mailOptions, (err, res) => {
      
    err ? console.log("There was an error: " + err) : console.log("The message was sent succefully")
  })
  
  setTimeout(()=>{
    res.render("indexForm")
  }, 2000)
  
})


module.exports = router;
