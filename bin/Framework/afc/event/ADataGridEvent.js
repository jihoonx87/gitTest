
/**
 * @author asoocool
 */

class ADataGridEvent extends AEvent
{
	constructor(acomp)
	{
		super(acomp);
	}
}
window.ADataGridEvent = ADataGridEvent;




//---------------------------------------------------------------------------------------------------
//	Component Event Functions

ADataGridEvent.prototype.select = function()
{
	this.selectBind = true;
};

ADataGridEvent.prototype.scrolltop = function()
{
	this.scrolltopBind = true;
};

ADataGridEvent.prototype.scrollbottom = function()
{
	this.scrollbottomBind = true;
};

ADataGridEvent.prototype.longtab = function()
{
	this.longtabBind = true;
};

ADataGridEvent.prototype.dblclick = function()
{
	this.dblclickBind = true;
};




//---------------------------------------------------------------------------------------------------
