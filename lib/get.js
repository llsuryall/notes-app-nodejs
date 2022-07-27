import {spawn} from 'child_process';
import fs from 'fs/promises';
import datadir from '../datadir.js';

function getNote(args){
	if(args[0]!=undefined){
		//Open the file in default editor
		const filepath=`${datadir}/${args[0]}`;
		fs.access(filepath,fs.constants.R_OK).then(()=>{
			spawn(process.env.EDITOR,['-R',filepath],{stdio:'inherit'})
		}).catch(()=>{
			console.error("No note exists with this title!");
		});
	}else{
		console.error("No title provided!");
	}
};

export default getNote;
