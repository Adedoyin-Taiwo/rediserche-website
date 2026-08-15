function inlineFormat(text: string) {
  return text;
}

import { ReactElement } from 'react';

export function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const blocks: ReactElement[] = [];
  let listItems: string[] = [];

  function flushList() {
    if (listItems.length) {
      blocks.push(
        <ul key={`ul-${blocks.length}`} className="mt-4 list-disc space-y-2 pl-6 text-muted">
          {listItems.map((item) => <li key={item} className="leading-7">{inlineFormat(item)}</li>)}
        </ul>
      );
      listItems = [];
    }
  }

  lines.forEach((raw, index) => {
    const line = raw.trim();
    if (!line) {
      flushList();
      return;
    }
    if (line.startsWith('- ')) {
      listItems.push(line.slice(2));
      return;
    }
    flushList();
    if (line.startsWith('## ')) {
      blocks.push(<h2 key={index} className="mt-10 text-2xl font-bold text-ink">{inlineFormat(line.slice(3))}</h2>);
    } else if (line.startsWith('# ')) {
      blocks.push(<h1 key={index} className="mt-10 text-3xl font-bold text-ink">{inlineFormat(line.slice(2))}</h1>);
    } else {
      blocks.push(<p key={index} className="mt-4 leading-8 text-muted">{inlineFormat(line)}</p>);
    }
  });
  flushList();
  return <>{blocks}</>;
}