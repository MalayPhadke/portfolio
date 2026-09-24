import bibtex from './publications.bib?raw';

export type Publication = {
  id: string;
  type: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  status: string;
  summary: string;
  featured: boolean;
  links: { label: string; url: string }[];
};

const fieldPattern = /(\w+)\s*=\s*\{([\s\S]*?)\}\s*,?/g;

export const publications: Publication[] = [...bibtex.matchAll(/@(\w+)\s*\{([^,]+),([\s\S]*?)\n\}/g)]
  .map((entry) => {
    const [, type, id, body] = entry;
    const fields: Record<string, string> = {};
    for (const field of body.matchAll(fieldPattern)) fields[field[1].toLowerCase()] = field[2].trim();
    const links: Publication['links'] = [];
    if (fields.doi) links.push({ label: 'DOI', url: fields.doi });
    if (fields.paper) links.push({ label: 'Paper', url: fields.paper });
    if (fields.code) links.push({ label: 'Code', url: fields.code });
    if (fields.project) links.push({ label: 'Project', url: fields.project });
    return {
      id,
      type,
      title: fields.title,
      authors: fields.author.split(/\s+and\s+/),
      year: Number(fields.year),
      venue: fields.venue || fields.booktitle || fields.journal,
      status: fields.status || 'Published',
      summary: fields.summary || '',
      featured: fields.featured === 'true',
      links
    };
  })
  .sort((a, b) => b.year - a.year || Number(b.featured) - Number(a.featured));
