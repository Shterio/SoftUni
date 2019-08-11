concert = (arr) => {
    let playBand = arr.pop();
    let bands = {};

    for (const line of arr) {
        if (line.includes('Add')) {
            let [, band, members] = line.split('; ');
            members = members.split(', ');
            if (!bands.hasOwnProperty(band)) {
                bands[band] = {
                    time: 0,
                    members: []
                }
            }
            if (bands.hasOwnProperty(band)) {
                for (let member of members) {
                    if (!bands[band].members.includes(member)) {
                        bands[band].members.push(member);
                    }
                }
            }
        } else if (line.includes('Play')) {
            let [, bandName, time] = line.split('; ');
            time = Number(time);
            if (!bands.hasOwnProperty(bandName)) {
                bands[bandName] = {
                    time: time,
                    members: []
                }
            } else {
                bands[bandName].time += time;
            }
        }
    }
    let obj = Object
        .entries(bands)
        .sort((a, b) => {
        if (b[1].time === a[1].time) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].time - a[1].time;
        }
    });

    let totalTime = obj.reduce((acc, value) => {
        return acc + value[1].time;
    }, 0);
    console.log(`Total time: ${totalTime}`);

    for (let bandName of obj) {
        console.log(`${bandName[0]} -> ${bandName[1].time}`);
    }
    for (let bandsKey in bands) {
        if (playBand === bandsKey) {
            console.log(bandsKey);
            let bandMembers = bands[bandsKey].members;
            for (let bandMember of bandMembers) {
                console.log(`=> ${bandMember}`);
            }
        }
    }
};
concert(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 2584',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 2584',
    'start of concert',
    'The Rolling Stones']);
