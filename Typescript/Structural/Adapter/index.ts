import EUSocket from './source/EUSocket.ts';
import USPlug from './source/USPlug.ts';
import USPlugEUAdapter from './source/USPlugEUAdapter.ts';

// This throw an error
// const euSocket = new EUSocket(new USPlug());

const usPlugAdapter = new USPlugEUAdapter(new USPlug());

const euSocket = new EUSocket(usPlugAdapter);

euSocket.connect();
