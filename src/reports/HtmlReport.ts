import fs from 'fs';
import { OutPutTarget } from '../Summary';

export class HtmlReport implements OutPutTarget {
  constructor(public fileName: string) {}

  print(report: string): void {
    const html = `<html><body><h1>Our Report</h1><div>${report}</div></body></html>`;
    fs.writeFileSync(this.fileName, html);
  }
}
