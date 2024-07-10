"use strict";
function make_album(artist, title, tracks) {
    // 'tracks?' means its an optional parameter.
    // Object which is 'album' and its Datatypes are defined after semi-colon :
    const album = {
        // Property : Value
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks; // Acessing object using album.tracks
    }
    return album;
}
const album1 = make_album('Drake', 'Honestly,Nevermind');
const album2 = make_album('Chris Brown', 'Breezy');
const album3 = make_album('Lil Wayne', 'Carter 3', 12);
console.log(album1);
console.log(album2);
console.log(album3);
