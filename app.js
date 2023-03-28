

function updateAvatarPosition( e )
{
    var avatar = document.getElementById("avatar");
    avatar.style.left = e.x + "px";
    avatar.style.top = e.y + "px";

    //alert( "e( " + e.x + ", " + e.y + " )" );    
    //alert( "avatar( " + avatar.x + ", " + avatar.y + " )" );
}

document.onmousemove = updateAvatarPosition;




