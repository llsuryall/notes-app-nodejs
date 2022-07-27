#!/usr/bin/env node
import abbrev from 'abbrev';

if(process.env.EDITOR==undefined){
	console.error('Set EDITOR environment variable with a suitable notes editor!');
}

if(process.argv.length<=2){
	process.exit(0);
}

// Parse command line arguments and call the requested method
const abbrevs=abbrev('init','add','delete','list','get','clear');
const request=abbrevs[process.argv[2]];

try{
	const {default:main}=await import(`../lib/${request}.js`);
	main(process.argv.slice(3));
}catch(e){
	if(e.code!='ERR_MODULE_NOT_FOUND'){
		console.error(e);
	}else{
		console.error('Invalid command!');
	}
}

export default {};
