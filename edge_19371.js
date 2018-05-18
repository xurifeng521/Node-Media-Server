const NodeMediaServer = require('./node_media_server');

const config = {
  rtmp: {
      port: 19371,
      chunk_size: 60000,
      gop_cache: true,
      ping: 60,
      ping_timeout: 30
  }
};


let nms = new NodeMediaServer(config)
nms.run();

