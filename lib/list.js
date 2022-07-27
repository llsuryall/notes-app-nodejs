import fs from 'fs/promises';
import datadir from '../datadir.js';

function listNotes(){
	fs.readdir(datadir).then((files)=>{
		if(files.length<=0){
			process.exit(0);
		}
		console.log('List of Notes -');
		for(const file of files){
			console.log('\t* '+file);
		}
	});
}

export default listNotes;
