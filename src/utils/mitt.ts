import type { Emitter } from 'mitt';
import mitt from 'mitt';

type Events = {};

export const emitter: Emitter<Events> = mitt<Events>();
