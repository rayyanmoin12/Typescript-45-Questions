"use strict";
let guest_List = ['Elon', 'Mark', 'Ronnie', 'Phil'];
let message = ' You have been invited to dinner at my house.';
for (let i = 0; i < guest_List.length; i++) {
    console.log('Dear ' + guest_List[i] + ',' + message);
}
