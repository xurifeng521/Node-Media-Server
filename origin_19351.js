const NodeMediaServer = require('./node_media_server');
const antUtils = require("./antUtils");

const config = {
  rtmp: {
    port: 19351,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8005,
    mediaroot: antUtils.mediaRoot,
    allow_origin: '*'
  },

    trans: {
        ffmpeg: antUtils.ffmpegPath,
        tasks: [
            {
                app: 'live4',
                ac: 'aac',
                hls: true,
                hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',

                mp4: true,
                mp4Flags: '[movflags=faststart]',
            },
            {
                app: 'screenRecord4',
                ac: 'aac',
                hls: true,
                hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',

                mp4: true,
                mp4Flags: '[movflags=faststart]',
            }
        ]
    },
    relay: {
        ffmpeg: antUtils.ffmpegPath,
        tasks: [
            {
                app: 'live4',
                mode: 'push',
                edge: antUtils.debug?'rtmp://localhost:19361':'rtmp://10.26.101.85:19361'
            },
            {
                app: 'live4',
                mode: 'push',
                edge: antUtils.debug?'rtmp://localhost:19371':'rtmp://10.45.9.175:19371'
            },
            {
                app: 'screenRecord4',
                mode: 'push',
                edge: antUtils.debug?'rtmp://localhost:19361':'rtmp://10.26.101.85:19361'
            },
            {
                app: 'screenRecord4',
                mode: 'push',
                edge: antUtils.debug?'rtmp://localhost:19371':'rtmp://10.45.9.175:19371'
            }
        ]
    }
};


let nms = new NodeMediaServer(config)
nms.run();

nms.on('preConnect', (id, args) => {
  console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
  // let session = nms.getSession(id);
  // session.reject();
});

nms.on('postConnect', (id, args) => {
  console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('doneConnect', (id, args) => {
  console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('prePublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  // let session = nms.getSession(id);
  // session.reject();
});

nms.on('postPublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on postPublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('donePublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on donePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('prePlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  // let session = nms.getSession(id);
  // session.reject();
});

nms.on('postPlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on postPlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('donePlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on donePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

