const os = require('os');

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;
  const tRam = totalmem() / 1024 / 1024;
  const fRam = freemem() / 1024 / 1024;
  const usageRam = (fRam / tRam) * 100;

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRam: `${parseInt(tRam)} MB`,
    FreeRam: `${parseInt(fRam)} MB`,
    UsageRam: `${parseInt(usageRam)} %`
  };
  exports.stats = stats;
}, 1000);
