let guest_List :string[] = ['Elon', 'Mark', 'Ronnie', 'Phil']

let message :string = ' You have been invited to dinner at my house.'

for(let i=0; i<guest_List.length; i++){

    console.log('Dear ' + guest_List[i] + ',' + message)
}

