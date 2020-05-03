
let array = [
    {
        picture: "url('pictures/Chateau_de_Chambord_2008_resize1.jpg')",
        title: "Chateau de Chambord (France)",
        hint: "Chateau de Chambord",
        descr: "Chateau de Chambord was built by Francis I as a royal hunting lodge but became the largest Renaissance castle in the Loire Valley."
    }, 
    {
        picture: "url('pictures/charles-postiaux-Q6UehpkBSnQ-unsplash_resize1.jpg')",
        title: "Tower Bridge (London)",
        hint: "Tower Bridge",
        descr: "Tower Bridge is a combined bascule and suspension bridge in London, built between 1886 and 1894. The bridge crosses the River Thames close to the Tower of London and has become an iconic symbol of London."
    },
    {
        picture: "url('pictures/godafoss-summer_resize1.jpg')",
        title: "Waterfall Goðafoss (Iceland)",
        hint: "Goðafoss",
        descr: "Goðafoss is a waterfall in northern Iceland. It is located along the country's main ring road at the junction with the Sprengisandur highland road. The water of the river Skjálfandafljót falls from a height of 12 metres over a width of 30 metres."
    },
    {
        picture: "url('pictures/nyc-4059594_960_720_resize1.jpg')",
        title: "Manhattan (USA)",
        hint: "Manhattan",
        descr: "Manhattan is the most densely populated of the five boroughs of New York City. Manhattan serves as the city's economic and administrative center, cultural identifierand historical birthplace."
    },
    {
        picture: "url('pictures/pyt456_resize1.jpg')",
        title: "San Francisco cable car (USA)",
        hint: "cable car",
        descr: "It’s easy to look at the cable car and see a touristy gimmick, but in fact, the famed mode of transportation has a deep-rooted history that’s as fascinating as the colorful murals that line Haight-Ashbury."
    },
    {
        picture: "url('pictures/Stockholm_Trygg_Sthlm_Heli_2_352_High-res-CMSTemplate.max-2500x900resize_1.jpg')",
        title: "Stockholm (Sweden)",
        hint: "Stockholm",
        descr: "Stockholm is the capital and most populous urban area of Sweden. 972,647 people live in the municipality, approximately 1.6 million in the urban area, and 2.4 million in the metropolitan area."
    },
    {
        picture: "url('pictures/Stonehenge-Salisbury-Plain-England-Wiltshire_resize1.jpg')",
        title: "Stonehenge (UK)",
        hint: "Stonehenge",
        descr: "Stonehenge is a prehistoric monument in Wiltshire, England, two miles (3 km) west of Amesbury. It consists of a ring of standing stones, each around 13 feet (4.0 m) high, seven feet (2.1 m) wide, and weighing around 25 tons. Archaeologists believe it was constructed from 3000 BC to 2000 BC."
    },
];

let index = 0;
let hintTop = -45;
letHintLeft = 455;

function refresh (index) {
    $(".pictures").css ("background-image", array[index].picture);
    $(".pictures>.text>h1").text (array[index].title); 
    $(".pictures>.text>p").text (array[index].descr);

}

function imgHandler (event) {
    console.log ("ImgHandler meghivodtam");

    index = $(this).data('big');
    $(this).parent().parent().find('.thumbnail').removeClass('activethumbnail');
    $(this).addClass('activethumbnail');
    refresh (index);
}

function leftHandler (event) {
    console.log ("leftHandler meghivodtam");

    if (index === 0) {
            index = array.length - 1;
            $(".thumbnails").children().last().children().first().trigger("click");
    } else {
        index--;
        $(".activethumbnail").parent().prev().children().first().trigger("click");
    }
    
    //refresh (index);
}

function rightHandler (event) {
    console.log ("rightHandler meghivodtam");
    if (index < array.length-1) {
        index++;
        $(".activethumbnail").parent().next().children().first().trigger("click");
    } else {
        index = 0;
        $(".thumbnails").children().first().children().first().trigger("click");
    }
    //refresh (index);
}

function hoverOn (event)  {
    console.log ("hoverOn meghivodtam");
    hovered = $(this).data('big');
    $(".hint").text (array[hovered].hint);
    let leftInitial = 451;
    let thumbnailWidth = 75+4+4;
    let left = leftInitial + hovered * (thumbnailWidth + 5);



    //let positionString = "{top: -45px, left: " + left + "px, position:'absolute'}";
    //$(".hint").css (positionString);
    $(".hint").css ({top: -45 + "px", left: left + "px"});
    //$(".hint").css("display", "block");
    $(".hint").show();
    //$("#mydiv").css({top: 200, left: 200, position:'absolute'});
    console.log (left);
    
}

function hoverOff (event)  {
    console.log ("hoverOff meghivodtam");
    $(".hint").hide();
}


$(".thumbnail").on ("click", imgHandler);
$(".arrow.right").on ("click", rightHandler);
$(".arrow.left").on ("click", leftHandler);
$(".thumbnail").on ("mouseenter", hoverOn);
$(".thumbnail").on ("mouseleave", hoverOff);

$('.thumbnail.first').trigger ("click");

