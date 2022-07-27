import fs from 'fs/promises';
import datadir from '../datadir.js';

const deleteNote=(args)=>{
	if(args[0]!=undefined){
		const filepath=`${datadir}/${args[0]}`;
		fs.unlink(filepath).then(()=>{
			console.log("Note deleted successfully!");
		}).catch(()=>{
			console.error("No note with given title exists!");
		});
	}else{
		console.error("No title provided!");
	}
};

export default deleteNote;
