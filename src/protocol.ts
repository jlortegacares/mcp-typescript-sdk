// Protocol implementation and utilities

export const PROTOCOL_VERSION = '1.0.0';

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'X-Protocol-Version': PROTOCOL_VERSION
};

export class ProtocolError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ProtocolError';
  }
}