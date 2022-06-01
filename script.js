fetch('https://api.chess.com/pub/streamers')
    .then(
        (response) =>
            response.json()
    )
    .then((data) => {
        display(data)
    })
    .catch(err => console.log(err))

function display (data) {

    

    for (i = 0; i < 375; i++) {

        var name = document.createElement("h1");
        name.textContent = data.streamers[i].username;
        name.id='username'

        var chess= document.createElement('a');
        var url = data.streamers[i].url;
        chess.setAttribute("href", url);
        chess.innerHTML = "Chess.com";
        chess.id='chess'

        var avatar = document.createElement("img");
        avatar.src = data.streamers[i].avatar;

        var twitch = document.createElement('a');
        var link = data.streamers[i].twitch_url;
        twitch.setAttribute("href", link);
        twitch.innerHTML = "Twitch";
        twitch.id='twitch'

        var status = document.createElement("button");
        status.id='status'

        if (data.streamers[i].is_live==true)
        status.style.backgroundColor="#21ff5c"
        else
        status.style.backgroundColor="#9c9c9c"  
       
        var div=document.createElement('div')
        div.id=i

        document.getElementById('container').appendChild(div);
        document.getElementById(i).appendChild(avatar);
        document.getElementById(i).appendChild(status);
        document.getElementById(i).appendChild(name);
        document.getElementById(i).appendChild(twitch);
        document.getElementById(i).appendChild(chess);
        

    }

}