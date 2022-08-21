import { defaultFilePath } from '../utils';

const config: Recordable = import.meta.glob('./modules/*.ts', { eager: true });

export const name = 'English';

export default defaultFilePath(config);
