
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//$$("ajoutEnt").hide();
	};// @lock
var ex=false,valide=false;
function exist(re){
		var em=$$(re).getValue();
			waf.ds.Entreprise.query(re+'==:1',em,{
           onSuccess:function(e){
           	var l=e.entityCollection.length;
           if(l!=0){
           	$('#'+re).css('border','solid 2px red');
		$('#'+re+'Er').css('color','red');
		$$(re+'Er').setValue(re.toUpperCase()+" existe déja !");
		ex=false;
           	}else{
           		$('#'+re).css('border','solid 2px green');
		$('#'+re+'Er').css('color','green');
		$$(re+'Er').setValue("Ok "+re.toUpperCase()+" valide ");
		ex= true;
           		}
           }
           });
           return ex;
}

function verifier(widget,len){
	var p=$$(widget).getValue().length;
		if(p<len){
		
		$('#'+widget).css('border','solid 2px red');
		$('#'+widget+'Er').css('color','red');
		$$(widget+'Er').setValue("Ce champ doit contenir au moins "+len+"  caracteres !");
		valide =false;
		
		}else{
		$('#'+widget).css('border','solid 2px green');
		
		$('#'+widget+'Er').css('color','green');
			$$(widget+'Er').setValue("OK");
			valide =true;
		}
		return valide;
	}

function init(){
	 $$('nom').setValue("");
	 $$('adresse').setValue("");
	 $$('nomEr').setValue("");
	 $$('adresseEr').setValue("");
	 $('#nom').css('border','');
	 $('#adresse').css('border','');
	 
	 
	}
// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
