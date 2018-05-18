
class AntUtils{
}

AntUtils.debug = true;

AntUtils.ffmpegPath = AntUtils.debug?"/home/wangpengfei/Excoord/Program/ffmpeg/ffmpeg-4.0-64bit-static/ffmpeg":"/root/Excoord/Program/ffmpeg/ffmpeg-4.0-64bit-static/ffmpeg";
AntUtils.mediaRoot = "/Users/Shared/littleant_files/liveVideo";
AntUtils.videoRecordNorifyUrl = AntUtils.debug?"http://192.168.50.34:8080/Excoord_PhoneService/srs/onDvr":"http://www.maaee.com/Excoord_PhoneService/srs/onDvr";

module.exports = AntUtils;