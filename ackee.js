import * as ackeeTracker from 'ackee-tracker';

ackeeTracker
  .create({
    server: 'https://example.com',
    domainId: 'hd11f820-68a1-11e6-8047-79c0c2d9bce0',
  })
  .record();