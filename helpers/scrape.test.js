import {expect} from 'chai';
let scrape = require('./scrape');

describe('Scrape', () => {
  //We need to figure out how to run callbacks and mock the data so that we can
  //run this test.
  xdescribe('scrapePetango', () => {
    it('works', () => {
      expect(scrape.scrapePetango("http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimals.aspx?species=Dog&sex=All&agegroup=All&colnum=1&authkey=1t4v495156y98t2wd78317102f933h83or1340ptjm31spd04d")).to.eql([]);
    });
  });
  // rather than put this html string right in your code - would be better to
  // save the html in a file and read it (using NodeJS file reading) - Harold
  let html = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>

      <title>Adoptable Animals</title>
      <link id="stylesheet" rel="stylesheet" href= type="text/css" />
      <style type="text/css">
          .hidden { display: none; }
      </style>
      <script language=javascript type="text/javascript">
          var newwindow;
          function poptastic(url)
          {
  	        newwindow=window.open(url,'Animal_Details','height=700,width=700,scrollbars=1,resizable=1');
  	        if (window.focus) {newwindow.focus()}
          }
      </script>
  </head>

  <body class="list-body">
          <!-- Google Tag Manager -->
      <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-55MWRN"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <script>(function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
          'gtm.start':

          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],

      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =

      '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);

  })(window, document, 'script', 'dataLayer', 'GTM-55MWRN');</script>
      <!-- End Google Tag Manager -->

  <div class="list-body">
      <table id="tblSearchResults" class="list-table" cellspacing="2" border="0" style="width:100%">
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=33150855&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=33150855&css=" >Lucas</a></div>
  <div class="list-animal-id">33150855</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">German Shepherd/Mix</div>
  <div class="list-animal-age">9 years 7 months</div>
  <div class="hidden">Dog Second Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=33927386&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/16b208ca-e425-4994-9b8e-d9aab96d0ddf_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=33927386&css=" >Loretta(Ariel)</a></div>
  <div class="list-animal-id">33927386</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Female</div>
  <div class="list-animal-breed">Great Pyrenees/Mix</div>
  <div class="list-animal-age">2 years 4 months</div>
  <div class="hidden">Dog Holding</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34250710&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/2fe1709a-ebc6-4f22-93cb-de89b9e3189c_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34250710&css=" >Cony</a></div>
  <div class="list-animal-id">34250710</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">Terrier, Pit Bull/Mix</div>
  <div class="list-animal-age">4 years 2 months</div>
  <div class="hidden">Dog Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34584335&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/11d1877d-8611-4f53-90db-0621d709b317_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34584335&css=" >Baltazaar</a></div>
  <div class="list-animal-id">34584335</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">Akita/Mix</div>
  <div class="list-animal-age">1 year 1 month</div>
  <div class="hidden">Dog Second Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34622074&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/02080eeb-7ffc-43b5-bb91-9a9c558ca0af_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34622074&css=" >Roscoe</a></div>
  <div class="list-animal-id">34622074</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">Hound/Mix</div>
  <div class="list-animal-age">1 year 1 month</div>
  <div class="hidden">Dog Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34733129&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/fa6d7884-cfbb-457e-945f-818eb736d768_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34733129&css=" >Pumba</a></div>
  <div class="list-animal-id">34733129</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">German Shepherd/Mix</div>
  <div class="list-animal-age">3 years</div>
  <div class="hidden">Dog Second Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34788723&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/d6dfcd96-6976-4214-85d3-d61a6cdd36c7_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34788723&css=" >Bella Mae</a></div>
  <div class="list-animal-id">34788723</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Female/Spayed</div>
  <div class="list-animal-breed">Terrier, American Pit Bull/Mix</div>
  <div class="list-animal-age">1 year 6 months</div>
  <div class="hidden">Dog Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34790773&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/579a8a51-6ebe-40ae-a4b8-1d5eba26b15c_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34790773&css=" >Reno</a></div>
  <div class="list-animal-id">34790773</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">Border Collie/Catahoula Leopard dog</div>
  <div class="list-animal-age"> 8 months</div>
  <div class="hidden">Dog Second Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34807661&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/870409f3-eb12-44da-b335-dbacf7827244_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34807661&css=" >Georgia</a></div>
  <div class="list-animal-id">34807661</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Female/Spayed</div>
  <div class="list-animal-breed">Poodle, Miniature/Mix</div>
  <div class="list-animal-age">10 years</div>
  <div class="hidden">Dog Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34843733&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/7e284739-77eb-4af6-b6c1-b554bf1ebbeb_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34843733&css=" >Sheeba</a></div>
  <div class="list-animal-id">34843733</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Female/Spayed</div>
  <div class="list-animal-breed">Shepherd/Mix</div>
  <div class="list-animal-age">2 years</div>
  <div class="hidden">Dog Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34843745&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/6cfdcf92-9921-4a20-a63f-048fa049efe5_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34843745&css=" >Chief</a></div>
  <div class="list-animal-id">34843745</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">Coonhound, Redbone/Mix</div>
  <div class="list-animal-age">1 year 6 months</div>
  <div class="hidden">Dog Holding</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34843747&css=" ><img class="list-animal-photo" src="//media.petango.com/webservices/adoptablesearch/images/Photo-Not-Available-dog.gif" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34843747&css=" >Snowy</a></div>
  <div class="list-animal-id">34843747</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Female/Spayed</div>
  <div class="list-animal-breed">Hound/Mix</div>
  <div class="list-animal-age">1 year</div>
  <div class="hidden">Dog Adopt</div>
  </div>
  </td>
  </tr>
  </table>

  <!--


  -->
  <br /><br />
  <div id="petango_ad" style="text-align:center"><a href="http://www.petango.com" target="_blank"><img src="../adoptablesearch/images/Powered-by-PP.GIF" alt="Powered by Petango" border="0" /></a></div>
  <!-- Begin comScore Tag -->
  <script>
      document.write(unescape("%3Cscript src='" + (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js' %3E%3C/script%3E"));
  </script>

  <script>
    COMSCORE.beacon({
      c1:2,
      c2:6745171,
      c3:"",
      c4:"",
      c5:"",
      c6:"",
      c15:""
    });
  </script>
  <noscript>
    <img src="http://b.scorecardresearch.com/p?c1=2&c2=6745171&c3=&c4=&c5=&c6=&c15=&cj=1" />
  </noscript>
  <!-- End comScore Tag -->

  </div>
  </body>
      </html>
  `;
  describe('parseAnimalListResponse', () => {
    it('works', () => {
      expect(scrape.parseAnimalListResponse(html)).to.eql(
      ["http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=33150855&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=33927386&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34250710&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34584335&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34622074&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34733129&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34788723&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34790773&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34807661&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34843733&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34843745&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34843747&css="]);
    });
  });
  let individualPetHtml = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>
	Animal Details
</title>
    <link id="stylesheet" rel="stylesheet" href="" type="text/css" />
    <style type='text/css'>
        .logo
        {
            width: 185px !important;
            height: 57px !important;
        }
        .centeredImage
        {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    </style>

    <script type="text/javascript">
        function loadPhoto(url) {
            document.imgAnimalPhoto.src = url;
        }
        function loadVideo(videoid) {
            window.open('wsYouTubeVideo.aspx?videoid=' + videoid, 'Video', 'status=no,menubar=no,scrollbars=no,resizable=no,width=500,height=380');
        }
    </script>

	<meta property="og:title" content="Meet Lucas" />
	<meta property="og:image" content="http://media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8.jpg" />
	<meta property="og:description" content="I'm Lucas!  I love people; especially ones that take the time to get to know me.  A perfect day for me would be going on a walk or playing fetch for some exercise, getting spoiled with a couple of treats, and then curling up on the couch to watch a movie.  I am crate trained and really well behaved.  I used to live with my brother, now that he found another home, I would probably do better as an only pet in the household.  I am really looking for a house with soft beds, people who like snuggles and taking me on walks, and yummy treats.  If this sounds like you and you are looking for a sweet new boy to join your family, please come down to HOV and meet me.  I would love to be your new best friend!" />
	<meta property="og:url" content="http://wspetangoprd.azurewebsites.net/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=33150855&css=" />
</head>
<body class="detail-body">
        <!-- Google Tag Manager -->
    <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-55MWRN"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script>(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':

        new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],

    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =

    '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);

})(window, document, 'script', 'dataLayer', 'GTM-55MWRN');</script>
    <!-- End Google Tag Manager -->

    <!-- default layout start-->
    <div id="DefaultLayoutDiv">
        <table cellpadding="0" cellspacing="0" width="100%" class="top-bar">
            <tr>
                <td>
                    <div id="petango_ad">
                        <a href="http://petango.com" id="petango_ad_link" target="_blank">
                            <img src="../adoptablesearch/images/Powered-by-PP.GIF" alt="Powered by Petango" border="0" />
                        </a>
                    </div>
                </td>
                <td class="detail-link" style="text-align: right; vertical-align: top;">
                    <!-- Go to www.addthis.com/dashboard to customize your tools -->
                    <div class="addthis_inline_share_toolbox"></div>
                    <a href="javascript:window.print()" class="print_btn_container"><span class="print_btn" /></a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="javascript:history.go(-1); " id="BackAnchor">
                        <img id="imgReturnToListing" src="images/returntolisting.gif" align="top" /></a>

                </td>
            </tr>
        </table>
        <table border="0">
            <tr>
                <td class="detail-animal-name" colspan="2">
                    Meet <span id="lbName">Lucas</span>
                </td>
            </tr>
            <tr>
                <td valign="top" style="width: 1%">
                    <img id="imgAnimalPhoto" class="detail-animal-photo" name="imgAnimalPhoto" src="//media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8.jpg" />
                    <div id="plPhotos" class="detail-photo-links">

                        Click a number to change picture or play to see a video:<br />
                        [<a id="lnkPhoto1" onclick="loadPhoto(&#39;//media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8.jpg&#39;); return false;" href="//media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8.jpg">1</a>] [<a id="lnkPhoto2" onclick="loadPhoto(&#39;//media.petango.com/sms/photos/1095/ff28963d-9568-47f6-bd56-bdf5ad4c3007.jpg&#39;); return false;" href="//media.petango.com/sms/photos/1095/ff28963d-9568-47f6-bd56-bdf5ad4c3007.jpg">2</a>] [<a id="lnkPhoto3" onclick="loadPhoto(&#39;//media.petango.com/sms/photos/1095/c2bca92c-f8ef-47b5-82a8-495877bfdee7.jpg&#39;); return false;" href="//media.petango.com/sms/photos/1095/c2bca92c-f8ef-47b5-82a8-495877bfdee7.jpg">3</a>]
                        <span id="spanVideo">[<a id="lnkVideo">Play</a>]
                        </span>

</div>
                </td>
                <td valign="top" style="width: 100%">
                    <table class="detail-table" border="0" cellspacing="0">
                        <tr id="trAnimalID">
	<td class="detail-label" align="right">
                                <b>Animal ID</b>
                            </td>
	<td class="detail-value">
                                <span id="lblID">33150855</span>&nbsp;
                            </td>
</tr>

                        <tr id="trSpecies">
	<td class="detail-label" align="right">
                                <b>Species</b>
                            </td>
	<td class="detail-value">
                                <span id="lblSpecies">Dog</span>&nbsp;
                            </td>
</tr>

                        <tr id="trBreed">
	<td class="detail-label" align="right">
                                <b>Breed</b>
                            </td>
	<td class="detail-value">
                                <span id="lbBreed">German Shepherd/Mix</span>&nbsp;
                            </td>
</tr>

                        <tr id="trAge">
	<td class="detail-label" align="right">
                                <b>Age</b>
                            </td>
	<td class="detail-value">
                                <span id="lbAge">9 years 7 months 10 days</span>&nbsp;
                            </td>
</tr>

                        <tr id="trSex">
	<td class="detail-label" align="right">
                                <b>Gender</b>
                            </td>
	<td class="detail-value">
                                <span id="lbSex">Male</span>&nbsp;
                            </td>
</tr>

                        <tr id="trSize">
	<td class="detail-label" align="right">
                                <b>Size</b>
                            </td>
	<td class="detail-value">
                                <span id="lblSize">Large</span>&nbsp;
                            </td>
</tr>

                        <tr id="trColor">
	<td class="detail-label" align="right">
                                <b>Color</b>
                            </td>
	<td class="detail-value">
                                <span id="lblColor">Black/Tan</span>&nbsp;
                            </td>
</tr>

                        <tr id="trAltered">
	<td class="detail-label" align="right">
                                <b>Spayed/Neutered</b>
                            </td>
	<td class="detail-value">
                                &nbsp;<img id="ImageAltered" src="images/GreenCheck.JPG" style="height:15px;width:15px;" />
                            </td>
</tr>

                        <tr id="trDeclawed">
	<td class="detail-label" align="right">
                                <b>Declawed</b>
                            </td>
	<td class="detail-value">
                                <span id="lbDeclawed">No</span>&nbsp;
                            </td>
</tr>









                        <tr id="trIntakeDate">
	<td class="detail-label" align="right">
                                <b>Intake Date</b>
                            </td>
	<td class="detail-value">
                                <span id="lblIntakeDate">1/25/2017</span>&nbsp;
                            </td>
</tr>




                    </table>
                </td>
            </tr>
        </table>
        <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td height="1">
                        <img name="Animal_r1_c1" src="images/Animal_r1_c1.gif" alt="" border="0" height="22"
                            width="20" />
                    </td>
                    <td height="1">
                        <img name="Animal_r1_c2" src="images/Animal_r1_c2.gif" alt="" border="0" height="22"
                            width="100%" />
                    </td>
                    <td height="1">
                        <img name="Animal_r1_c3" src="images/Animal_r1_c3.gif" alt="" border="0" height="22"
                            width="24" />
                    </td>
                </tr>
                <tr>
                    <td background="images/Animal_r2_c1.gif"></td>
                    <td bgcolor="#eceff6" valign="top" style="padding-top: 3px">
                        <!-- Description -->
                        <div id="tblDescription" class="detail-animal-desc">
                            <span id="lbDescription">I'm Lucas!  I love people; especially ones that take the time to get to know me.  A perfect day for me would be going on a walk or playing fetch for some exercise, getting spoiled with a couple of treats, and then curling up on the couch to watch a movie.  I am crate trained and really well behaved.  I used to live with my brother, now that he found another home, I would probably do better as an only pet in the household.  I am really looking for a house with soft beds, people who like snuggles and taking me on walks, and yummy treats.  If this sounds like you and you are looking for a sweet new boy to join your family, please come down to HOV and meet me.  I would love to be your new best friend!</span>
                        </div>
                        <!-- Logos -->
                        <div id="tbl24PWtrial">

                                <div style="margin-left: auto; margin-right: auto; float: left; display:inline-block;">
                                <a id="HyperLink2" href="http://www.24PetWatch.com" target="_blank"><img src="../adoptablesearch/images/24PW-Web-Services-Graphic-Trial.png" border="0" alt="" /></a>
                                </div>

</div>









                    </td>
                    <td background="images/Animal_r2_c3.gif"></td>
                </tr>
                <tr>
                    <td>
                        <img name="Animal_r3_c1" src="images/Animal_r3_c1.gif" alt="" border="0" height="23"
                            width="20" />
                    </td>
                    <td>
                        <img name="Animal_r3_c2" src="images/Animal_r3_c2.gif" alt="" border="0" height="23"
                            width="100%" />
                    </td>
                    <td>
                        <img name="Animal_r3_c3" src="images/Animal_r3_c3.gif" alt="" border="0" height="23"
                            width="24" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- default layout end-->
    <!-- alternate layout start-->

    <!-- alternate layout end-->
    <!-- Begin comScore Tag -->
    <script>
        document.write(unescape("%3Cscript src='" + (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js' %3E%3C/script%3E"));
    </script>
    <script>
        COMSCORE.beacon({
            c1: 2,
            c2: 6745171,
            c3: "",
            c4: "",
            c5: "",
            c6: "",
            c15: ""
        });
    </script>
    <noscript>
        <img src="http://b.scorecardresearch.com/p?c1=2&c2=6745171&c3=&c4=&c5=&c6=&c15=&cj=1" />
    </noscript>
    <!-- End comScore Tag -->

    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-588b5f256d215fd9"></script>
</body>
    </html>
  `;
  describe('parseIndividualAnimalResponse', () => {
    it('works', () => {
      expect(scrape.parseIndividualAnimalResponse(individualPetHtml)).to.eql(
        {
          animalId: 33150855,
          mainPhoto:"//media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8.jpg",
          name: "Lucas",
          species: "Dog",
          breed: "German Shepherd/Mix",
          age: "9 years 7 months 10 days",
          gender: "Male",
          size: "Large",
          color: "Black/Tan",
          spayNeuter: true,
          declawed: "No",
          intakeDate: "1/25/2017",
          description: "I'm Lucas!  I love people; especially ones that take the time to get to know me.  A perfect day for me would be going on a walk or playing fetch for some exercise, getting spoiled with a couple of treats, and then curling up on the couch to watch a movie.  I am crate trained and really well behaved.  I used to live with my brother, now that he found another home, I would probably do better as an only pet in the household.  I am really looking for a house with soft beds, people who like snuggles and taking me on walks, and yummy treats.  If this sounds like you and you are looking for a sweet new boy to join your family, please come down to HOV and meet me.  I would love to be your new best friend!"
        }
      );
    });
  });
});
