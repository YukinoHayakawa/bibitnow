var BINPreformatter = ( function () {

	// a shadow as a "promise not to touch global data and variables". Must be included to be accepted!
	var BINData = null;
	var BINInteraction = null;
	var BINParser =  null;
	var window = null;
	var document = null;
	
	//preformat raw data including raw RIS
	function preformatRawData(metaData, parser) {
		//fix title, year and journal abbreviation
		metaData["citation_download"] = metaData["citation_download"].replace(/LP[\t\ ]+[\-]+[\t\ ]+/,"EP - ").replace(/JO[\t\ ]+[\-]+[\t\ ]+/,"JA - ").replace(/M3[\t\ ]+[\-]+[\t\ ]+/,"DO - ").trim();
	}
	
	
	//preformatting function
	function preformatData(metaData, parser) {
		
		//fix nothing so far
	}
	
	// expose preformatting function and raw preformatting function
	return { preformatData : preformatData , preformatRawData: preformatRawData };

}());
