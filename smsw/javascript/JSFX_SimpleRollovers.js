/*******************************************************************
* File    : JSFX_SimpleRollover.js � JavaScript-FX.com
*
* Created : 2001/03/19
*
* Author  : Roy Whittle www.Roy.Whittle.com
*
* Purpose : To create image rollovers.
*		For simple image swaps this code is a little too heavy.
*		However, if you have pre image loads and multiple image
*		swaps then this can work out better by allowing the
*		page to load faster.
*		The best feature is the "post" image load.
*
* History
* Date         Version        Description
*
* 2001-03-18	1.0		Initial version for JavaScript-FX.com
* 2001-09-17	1.1		Made the interface the same as for animated
*					and fading rollovers.
***********************************************************************/
if(!window.JSFX)
JSFX=new Object();

JSFX.RolloverObjects=new Array();

JSFX.Rollover = function(name, img)
{
	JSFX.RolloverObjects[name]= new Image();
	JSFX.RolloverObjects[name].img_src = img;
	if(!JSFX.Rollover.postLoad)
	JSFX.RolloverObjects[name].src = img;
}
JSFX.Rollover.postLoad = false;
JSFX.Rollover.loadImages = function()
{
	var i;
	for(i in JSFX.RolloverObjects)
	{
		r=JSFX.RolloverObjects[i];
		r.src=r.img_src;
	}
}
JSFX.Rollover.error = function(n)
{
	alert("JSFX.Rollover - An Error has been detected\n"
	+ "----------------------------------\n"
	+ "You must define a JSFX.Rollover in your document\n"
	+ "JSFX.Rollover(\""+n+"\",\"your_on_img.gif\")\n"
	+ "(check the spelling of your JSFX.Rollovers)");
}
JSFX.findImg = function(n, d)
{
	var img = d.images[n];
	if(!img && d.layers)
	for(var i=0 ; !img && i<d.layers.length ; i++)
	img=JSFX.findImg(n,d.layers[i].document);

	/*** Stop emails because the image was named incorrectly ***/
	if(!img)
	{
		alert("JSFX.Rollover - An Error has been detected\n"
		+ "----------------------------------\n"
		+ "You must define an image in your document\n"
		+ "<IMG SRC=\"your_image.ext\" NAME=\""+n+"\">\n"
		+ "(check the NAME= attribute of your images)");

		return(new Image());
	}
	return img;
}
JSFX.imgOn = function(imgName, rollName)
{
	if(rollName == null)
	rollName=imgName;

	/*** Stop emails because the rollover was named incorrectly ***/
	if(!JSFX.RolloverObjects[rollName])
	{
		JSFX.Rollover.error(rollName);
		return;
	}
	var img = JSFX.findImg(imgName,document);
	if(img.offSrc==null)
	img.offSrc=img.src;
	img.src=JSFX.RolloverObjects[rollName].img_src;
}
JSFX.imgOff = function(imgName)
{
	var img = JSFX.findImg(imgName,document);
	img.src=img.offSrc;
}
