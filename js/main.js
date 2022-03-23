
var is_on = 3;
var total_tabs = 7;

function add_nav(){	
	for(i=1;i <= total_tabs;i++)	
	{			   
		document.getElementById("tab-label-"+i).addEventListener("click", function(){ set_on(this);}); 		
	}
}

function set_off_all(){
	for(i=1;i <= total_tabs;i++)
	{
	   document.getElementById("tab-content-tab-" + i).style.display = 'none';
	   document.getElementById("tab-label-" + i).className = 'box box--tab';
	}
}
function set_on(obj){	
	set_off_all();
	var v_aux = obj.id.split("-") ;	
	document.getElementById("tab-content-tab-" + v_aux[2]).style.display = 'flex';
	 document.getElementById("tab-label-" + v_aux[2]).className = 'box box--tab box--tab--selected';
}

window.addEventListener("load",add_nav);