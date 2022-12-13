
const router = require('express').Router();

router.get('/', async (req, res) => {
    var d = require('diskinfo');

    d.getDrives((err, aDrives) => {
        if (err) {
            console.error(err);
        }
        for (var i = 0; i < aDrives.length; i++) {
            var os = require("os");
            infoPoke = os.cpus();
            system = os.platform();
            arquitectura = os.arch();
            version = os.release();
            time = os.uptime();
            var total = ((os.totalmem()) / 1048576);
            var mbFree = ((os.freemem()) / 1048576);
            var mounted = aDrives[i].mounted;
            var totall = (aDrives[i].blocks / 1024 / 1024 / 1024).toFixed(0) + " gb";
            var used = (aDrives[i].used / 1024 / 1024 / 1024).toFixed(0) + " gb";
            var available = (aDrives[i].available / 1024 / 1024 / 1024).toFixed(0) + " gb";
            var capacity = aDrives[i].capacity;
            let dataExtra = {
                dataPoke: infoPoke,
                dataTotal: total,
                dataLibre: mbFree,
                dataDiscTotall: totall,
                dataDiscMounted: mounted,
                dataDiscUsed: used,
                dataDiscAvailable: available,
                dataDiscCapacity: capacity,
                dataSystem: system,
                dataArqui: arquitectura,
                dataVersion: version,
                dataTime: time
            }
            res.render('index', {
                dataExtra: dataExtra
            })
            break;
        }
    });
});
module.exports = router;