class Artist {
    constructor(artist, currency) {
        this.artist = artist;
        this.currency = currency;
        this.pricePerSong = 0;
        this.songsList = [];
        this.wealth = 0;
    }
    intro() {
        console.log(` Hi, my name is ${this.artist} and I am a musician!`);
        console.log('');
    };

    songPrice(price) {
        this.pricePerSong = price;
        console.log(`${this.artist}'s price per song is ${(this.pricePerSong / 100).toFixed(2)
            } ${this.currency};`);
        console.log('');
    };

    addSong(songName) {
        this.songsList.push({ songName, count: 0 });
    };

    playlist() {
        console.log(`'${this.artist}'s playlist:`);
        console.log('====================');
        for (let i = 0; i < this.songsList.length; i++) {
            const song = this.songsList[i];

            console.log(`${i + 1}. ${song.songName} (${song.count})`);
        }
        console.log('====================');
        console.log('');
    };

    playSong(index) {
        if (this.songsList[index]) {
            this.songsList[index].count += 1;
            this.wealth += this.pricePerSong;
            console.log(`**Playing song: ${this.songsList[index].songName}.**`);
            console.log('');
        }
    };

    fortune() {
        // for (const song of this.songsList) {
        //     console.log(song.count);
        //     this.wealth += song.count * this.pricePerSong;
        // }
        console.log(`Total lifetime wealth of ${this.artist} is ${(this.wealth / 100).toFixed(2)} ${this.currency} right now!`);
        console.log('');
    };


}

module.exports = Artist;