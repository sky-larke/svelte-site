import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PROJECTS_DIR = 'src/routes/(projects)';  // Directory to scan for projects
const OUTPUT_PATH = 'static/projects.json'


function traverse(p: string) {
    const files = fs.readdirSync(p);
    // console.log("traversing", p, files);
    const result: object[] = [];

    for (const file of files) {
        const filePath = path.join(p, file);
        if (file === '+page.svx') {
            const { data } = matter(fs.readFileSync(filePath, 'utf-8'));
            //console.log(data)
            return (data.draft ? {} : {
                type: 'file',
                name: data.title, // Use the directory name as the file name
                subtitle: data.subtitle,
                link: path.basename(p),
                icon: data.icon,
                tech: data.tech,
                topics: data.topics, 
                parent: data.parent
            });
        }
        else if (file.startsWith("(")) {
            result.push({
                type: 'folder',
                name: file.replace(/[()]/g, ""),
                files: traverse(filePath),
                expanded: false,
            });
        } else if (fs.statSync(filePath).isDirectory()) {
            result.push(traverse(filePath));
        }
    }
    return result;
}


const rootStructure = traverse(PROJECTS_DIR)

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(rootStructure, null, 2));
console.log('Projects JSON generated at', OUTPUT_PATH);
console.log(JSON.stringify(rootStructure, null, 2))


