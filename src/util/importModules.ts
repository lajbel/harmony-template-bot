/* ???
This uses the import feature that "executes" a module when it's imported
*/
// TODO: Clean
export async function importModules(path: string) {
    for (const file of Deno.readDirSync(`./src/${path}`)) {
        if (file.isFile) {
            await import(`../${path}/${file.name}`);
        }
    }
}