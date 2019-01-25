var mjml2html = require('mjml')

const emailZoro = function(text) {

  return mjml2html(`
  <mjml>
  <mj-body background-color="#ffffff" font-size="13px">
    <mj-section background-color="#ffffff" padding-bottom="0px" padding-top="0px">
    </mj-section>
    <mj-section background-color="#00264d" vertical-align="top" padding-bottom="0px" padding-top="0px">
      <mj-column vertical-align="top" width="100%">
        <mj-text align="left" color="#cc7e00" font-size="45px" font-weight="bold" font-family="open Sans Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px" padding-bottom="30px" padding-top="30px">Hello Amalija</mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#009fe3" padding-bottom="35px" >
      <mj-column vertical-align="middle" width="100%">
        <mj-text align="left" color="#ffffff" font-size="22px" font-family="open Sans Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px"><span style="color:#FEEB35"></span><br /><br /> You have someone that is interested in a tattoo,</mj-text>
        <mj-text align="left" color="#ffffff" font-size="15px" line-height= "30px" font-family="open Sans Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px"> 
        Name: ${text.name} 
        <br>
        Email: ${text.email} 
        <br>
        Phone: ${text.phone} 
        <br>
        Place of Tattoo: ${text.place}
        <br>
        Description of Tattoo: ${text.description}
        
        
        
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
  </mjml>
  `)
}

module.exports = emailZoro
