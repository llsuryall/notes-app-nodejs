import {spawn} from 'child_process';
import datadir from '../datadir.js';

function addNote(args){
	if(args[0]!=undefined){
		//Open the file in default editor
		const filepath=`${datadir}/${args[0]}`;
		const edit=spawn(process.env.EDITOR,[filepath],{stdio:'inherit'});
		edit.on('close',(exit_code)=>{
			if(exit_code==0){
				console.log("Note saved successfully!");
			}else{
				console.error("Unable to save note successfully");
			}
		});
	}else{
		console.error("No title provided!");
	}
};

export default addNote;
