import { normalize, schema } from 'normalizr';

const message = new schema.Entity('messages');

export const Schemas = {
  MESSAGESCHEMA:message,
  MESSAGE_ARRAY:[message]
};
