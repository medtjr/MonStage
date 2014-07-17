
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var button9 = {};	// @button
	var adresse = {};	// @textField
	var nom = {};	// @textField
	var ann = {};	// @button
	var ajj = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$("button9").disable();
	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		init();
		var date =$$("date").getValue()
		var file= $$("fileUpload1").getFiles();
		var lon=file.length;
		if(lon==0 || date==''){
			alert("Indiquer SVP la date d'ajout \n anisi une image pour l'entreprise !");
		}
	};// @lock

	adresse.keyup = function adresse_keyup (event)// @startlock
	{// @endlock
		verifier("adresse",10);
		if(verifier("adresse",10)){
			exist("adresse");
			if(!exist("adresse")) $$("button9").disable();else $$("button9").enable();
		}else{
			$$("button9").disable();
		}
	};// @lock

	nom.keyup = function nom_keyup (event)// @startlock
	{// @endlock
		verifier("nom",2);
		if(verifier("nom",2)){
			exist("nom");
			if(!exist("nom")) $$("button9").disable(); else $$("button9").enable();
		}else{
			$$("button9").disable();
		}
	};// @lock

	ann.click = function ann_click (event)// @startlock
	{// @endlock
		$$("ajoutEntr").hide();
		$$("ajj").show();
		$$("ann").hide();
	};// @lock

	ajj.click = function ajj_click (event)// @startlock
	{// @endlock
		$$("ajoutEntr").show();
		$$("ann").show();
		$$("ajj").hide();
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
	WAF.addListener("button9", "click", button9.click, "WAF");
	WAF.addListener("adresse", "keyup", adresse.keyup, "WAF");
	WAF.addListener("nom", "keyup", nom.keyup, "WAF");
	WAF.addListener("ann", "click", ann.click, "WAF");
	WAF.addListener("ajj", "click", ajj.click, "WAF");
// @endregion
};// @endlock
