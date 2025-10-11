const fs = require('fs');
const path = require('path');

const sanitizeSpaces = (str) => {
	const splits = str
		.replaceAll(/[^a-zA-Z0-9._ ]/g, '')
		.split(' ')
		.map(v=>{
			const chars = v.split('')
			return chars.map(v=>v.toLowerCase()).join('')
		})
	return splits.join('-')
}

const makeRealLink = (match, fileName, anchor, _, label) => {
	const sanitizedFileName = sanitizeSpaces((fileName ||'').replace(/\.md$/, ''));
	const printFile = fileName !== undefined ? sanitizedFileName + '.md' : '';
	const printAnchor = anchor !== undefined ? '#' + sanitizeSpaces(anchor) : '';
	const printText = label || fileName;
	return `[${printText}](${printFile}${printAnchor})`;
}

const bakeWikiLinks = (str) => {
	const replaced = str.replaceAll(/\[\[([a-zA-Z_ ]+)?(\#[^\|]+)?(\\?\|([^\]]+))?\]\]/g, makeRealLink);
	if (replaced.includes('[[')) {
		throw new Error ('"[[" case not handled!')
	}
	return replaced;
};

const inputPath = './Obsidian/';
const workingPath = './temp/'
const outputPath = './docs/';

fs.mkdirSync(workingPath, { recursive: true })
fs.mkdirSync(workingPath + 'media/', { recursive: true })
fs.mkdirSync(workingPath + '.vitepress/', { recursive: true })

for (file of fs.readdirSync(
	inputPath,
	{ withFileTypes: true }
)) {
	if (!file.isDirectory() && file.name.endsWith('.md')) {
		const filePath = inputPath + file.name;
		const fileText = fs.readFileSync(filePath).toString('utf8');
		try {
			const baked = bakeWikiLinks(fileText);
			const sanitizedName = sanitizeSpaces(file.name.replace(/\.md$/, ''))
			fs.writeFileSync(
				workingPath + sanitizedName + '.md', baked
			)
		} catch {
			console.error(`Unhandled '[[' found in file ${file.name}`)
			fs.rmSync(workingPath);
		}
	}
}

// If we're here, then all the files were converted to non-wikilinks successfully.

// Copy media files
for (file of fs.readdirSync(
	inputPath + 'media/',
	{ withFileTypes: true }
)) {
	const prevLocation = inputPath + 'media/' + file.name;
	const newLocation = workingPath + 'media/' + file.name;
	fs.copyFileSync(
		prevLocation,
		newLocation,
		0,
		e=>{
			if (e) throw new Error ('could not copy media file ' + file.name)
		}
	)
}

// copy old vitepress files into temp place

const copyFromFolderToFolder = (oldPath, newPath, folderName) => {
	const originFolder = oldPath + folderName + '/';
	const destinationFolder = newPath + folderName + '/';
	fs.mkdirSync(destinationFolder, { recursive: true })
	for (file of fs.readdirSync(
		originFolder,
		{ withFileTypes: true }
	)) {
		if (file.isDirectory()) {
			// copyFromFolderToFolder(originFolder, destinationFolder, file.name);
		} else {
			fs.copyFileSync(
				originFolder + file.name,
				destinationFolder + file.name,
				0,
				e=>{
					if (e) throw new Error ('could not copy file ' + file.name)
				}
			)
		}
	}
}

const vitepressOrigin = outputPath + '.vitepress/';
const vitepressDestination = workingPath + '.vitepress/';
for (file of fs.readdirSync(
	vitepressOrigin,
	{ withFileTypes: true },
	false
)) {
	if (file.name.startsWith('.')) continue;
	if (file.name == 'dist') continue;
	if (file.isDirectory()) {
		copyFromFolderToFolder(vitepressOrigin, vitepressDestination, file.name)
	} else {
		fs.copyFileSync(
			vitepressOrigin + file.name,
			vitepressDestination + file.name,
			0,
			e=>{
				if (e) throw new Error ('could not copy file ' + file.name)
			}
		)
	}
};

const backupOutput = outputPath.replace(/\/$/, '-backup/');
fs.renameSync(outputPath, backupOutput);
fs.renameSync(workingPath, outputPath);
fs.rmSync(backupOutput, {recursive: true});

console.log('successfully baked wikilinks')
