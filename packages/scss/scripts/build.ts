import { compileSassAndSaveMultiple } from 'compile-sass';
import path from 'path';

async function build(): Promise<void> {
  await compileSassAndSaveMultiple({
    sassPath: path.join(__dirname, '..', 'src/'),
    cssPath: path.join(__dirname, '..', 'dist/css/'),
    files: ['main.scss'],
  });
}

build();
