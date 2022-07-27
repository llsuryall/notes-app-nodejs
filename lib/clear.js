import fs from 'fs/promises';
import datadir from '../datadir.js';

const clearNotes=()=>{
	fs.readdir(datadir).then(async(files)=>{
		for(const file of files){
			await fs.unlink(`${datadir}/${file}`);
		}
		console.log("All notes deleted successfully!");
	});
}

export default clearNotes;
