import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename) + '/assets/olog';
const Interpolate = (template, params) => {
    if (!params) {
        return template;
    }
    return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => {
        return params[key] !== undefined ? String(params[key]) : '';
    });
};
const Content = (keys, params) => {
    const raw = keys.split('.').reduce((acc, key) => acc[key], yaml.parse(fs.readFileSync(path.join(__dirname, 'banner.yaml'), 'utf-8')));
    if (typeof raw !== 'string') {
        return keys;
    }
    return Interpolate(raw, params);
};
const Package = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8'));
export default Content('banner', {
    project: Package['name'],
    version: Package['version'],
    description: Package['description'],
    env: process.env['NODE_ENV'] ?? 'development',
    nodeVersion: process.version,
});
//# sourceMappingURL=main.js.map