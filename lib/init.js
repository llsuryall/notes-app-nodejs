import datadir from '../datadir.js';
import fs from 'fs/promises';

function initNotes(){
	fs.mkdir(datadir, {recursive: true}).then(()=>{
		console.log("Successfully initialized the notes app directories!");
	}).catch(()=>{
		console.error("Unable to create data directories!");
	});
}

export default initNotes;
