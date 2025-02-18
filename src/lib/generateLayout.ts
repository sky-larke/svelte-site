import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PROJECTS_DIR = 'src/routes/projects';  // Directory to scan for projects
const OUTPUT_PATH = 'static/projects.json'



const files = fs.readdirSync(PROJECTS_DIR);

const filteredFiles = files
    .filter(file => file.endsWith('.svx'))
    .map(file => {
        const filePath = path.join(PROJECTS_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        return {
            type: 'file',
            name: data.title,
        };  
    });

console.log('Generated JSON:', filteredFiles);


// TODO: make this a more dynamic way to sort files. idk
const folders = fs.readdirSync(PROJECTS_DIR);
const rootStructure: any[] = [];

for (const folder of folders) {
    const folderPath = path.join(PROJECTS_DIR, folder);
    if (fs.statSync(folderPath).isDirectory()) {
        rootStructure.push({
            type: 'folder',
            name: folder,
            files: filteredFiles,
            expanded: false,
        });
    }
}

console.log(rootStructure)


fs.writeFileSync(OUTPUT_PATH, JSON.stringify(rootStructure, null, 2));
console.log('Projects JSON generated at', OUTPUT_PATH);


