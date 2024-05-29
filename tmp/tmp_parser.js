const fs = require('fs');
const path = require('path');

function parseMdFile(mdFile) {
  const content = fs.readFileSync(mdFile, 'utf-8');
  const sections = {};
  let currentSection = null;
  let currentSubsection = null;

  const sectionPattern = /^(#+)\s*(.+)$/gm;
  const langPattern = /^(DE|EN)\s*$/gm;

  let match;
  while ((match = sectionPattern.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const startPos = sectionPattern.lastIndex;
    const endPos = content.slice(startPos).search(sectionPattern);
    const sectionText = content.slice(startPos, endPos !== -1 ? startPos + endPos : undefined).trim();

    if (level === 1) {
      currentSection = title;
      sections[currentSection] = { text: sectionText, en: '', de: '' };
    } else if (level === 2) {
      currentSubsection = title;
      if (currentSection) {
        if (!sections[currentSection][currentSubsection]) {
          sections[currentSection][currentSubsection] = { text: sectionText, en: '', de: '' };
        } else {
          sections[currentSection][currentSubsection].text += '\n' + sectionText;
        }
      }
    }

    let langMatch;
    while ((langMatch = langPattern.exec(sectionText)) !== null) {
      const lang = langMatch[1].toLowerCase();
      const langStartPos = langPattern.lastIndex;
      const nextLangMatch = sectionText.slice(langStartPos).search(langPattern);
      const langEndPos = nextLangMatch !== -1 ? langStartPos + nextLangMatch : undefined;
      const langText = sectionText.slice(langStartPos, langEndPos).trim();

      if (level === 1) {
        sections[currentSection][lang] = langText;
      } else if (level === 2 && currentSubsection) {
        sections[currentSection][currentSubsection][lang] = langText;
      }
    }
  }

  return sections;
}

function saveToJson(sections, outputDir) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  for (const [section, content] of Object.entries(sections)) {
    const filename = `${section.replace(/\s+/g, '_').toLowerCase()}.json`;
    const filepath = path.join(outputDir, filename);
    fs.writeFileSync(filepath, JSON.stringify({ [section]: content }, null, 4), 'utf-8');
  }
}

const mdFile = 'texts.md';
const outputDir = 'output_json';
const sections = parseMdFile(mdFile);
saveToJson(sections, outputDir);
console.log(`Parsing completed. JSON files are saved in '${outputDir}'.`);
