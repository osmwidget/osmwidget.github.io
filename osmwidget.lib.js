/**
 * Created with IntelliJ IDEA.
 * User: sandra
 * Date: 6/11/12
 * Time: 6:26 PM
 * To change this template use File | Settings | File Templates.
 */


var icons = {
    urlPrefix:'http://google-maps-icons.googlecode.com/files/',
    list: ['mine.png','friends.png','hats.png','restaurantjapanese.png','speed50.png','massage.png','police.png','newsagent.png','seals.png','cathedral.png','bullfight.png','wedding.png','ropescourse.png','apartment.png','rattlesnake.png','hotel2stars.png','bankeuro.png','restaurantchinese.png','sunday.png','cablecar.png','thursday.png','templehindu.png','airport-terminal.png','exit.png','pets.png','drugs.png','basketball.png','cyclingsprint.png','firemen.png','cabin.png','bridgemodern.png','restaurant-barbecue.png','restaurant-fish.png','nanny.png','magicshow.png','workoffice.png','lighthouse.png','aquarium.png','cyclingfeedarea.png','corral.png','left.png','upthenleft.png','days-ven.png','cyclingmountain4.png','soccer2.png','fortress.png','sight.png','fireworks.png','cloudsun.png','videogames.png','speed100.png','ophthalmologist.png','motorcycle.png','skiing.png','gun.png','powersubstation.png','jewishquarter.png','tuesday.png','school.png','currencyexchange.png','mobilephonetower.png','music.png','friday.png','shower.png','trash.png','tennis2.png','photoupleft.png','fishingshop.png','hotel4stars.png','parking.png','days-sam.png','speed60.png','poker.png','forest.png','textiles.png','artgallery.png','speed20.png','windsurfing.png','winery.png','ruins.png','flood.png','telephone.png','restaurantgourmet.png','gondola.png','tollstation.png','snowshoeing.png','bookstore.png','fossils.png','resort.png','garden.png','hotairballoon.png','photoleft.png','carrepair.png','cyclinguncategorized.png','karting.png','schrink.png','cluster4.png','speedhump.png','mosque.png','country.png','restaurantmediterranean.png','glacier.png','computer.png','leftthenup.png','geyser.png','canoe.png','jogging.png','speed40.png','hiking.png','hotel5stars.png','rightthendown.png','club.png','powerlinepole.png','construction.png','drinkingwater.png','speed90.png','speed70.png','racing.png','laundromat.png','hunting.png','wineyard.png','grocery.png','shelter-sleeping.png','teahouse.png','police2.png','administration.png','lake.png','parkandride.png','thunder.png','strike1.png','airplane-sport.png','sauna.png','photoupright.png','white1.png','toys.png','wednesday.png','paint.png','days-jeu.png','deptstore.png','museum-science.png','yoga.png','waterwell.png','villa.png','fastfood.png','pool.png','fishing.png','modernmonument.png','followpath.png','photoright.png','cricket.png','port.png','entrance.png','expert.png','down.png','speed110.png','speed130.png','chapel.png','pool-indoor.png','up.png','turnleft.png','ancientmonument.png','spelunking.png','historicalquarter.png','vet.png','waterpark.png','upthenright.png','restaurantindian.png','embassy.png','fountain.png','waterfall.png','palace.png','info.png','days-jue.png','soccer.png','headstone.png','days-vie.png','days-qui.png','downthenright.png','hotel1star.png','usfootball.png','strike.png','smallcity.png','crossingguard.png','hotel3stars.png','clothes-male.png','dentist.png','communitycentre.png','museum-crafts.png','concessionaire.png','realestate.png','patisserie.png','fire-extinguisher.png','snowmobiling.png','tapas.png','restaurantmexican.png','surfing.png','court.png','cathedral2.png','baseball.png','speed80.png','recycle.png','justice.png','upright.png','synagogue.png','photography.png','restaurantthai.png','windturbine.png','cyclingmountain3.png','days-mer.png','boxing.png','petroglyphs.png','cluster.png','church2.png','wifi.png','seniorsite.png','waitingroom.png','ancienttemple.png','citysquare.png','tunnel.png','restaurantkorean.png','customs.png','diving.png','iceskating.png','icecream.png','family.png','snow.png','campingsite.png','monday.png','text.png','atm.png','rugby.png','company.png','explosion.png','nordicski.png','shoppingmall.png','climbing.png','sciencecenter.png','rightthenup.png','stop.png','flowers.png','snowboarding.png','cross.png','dam.png','theater.png','cycling.png','cocktail.png','agriculture.png','restaurantafrican.png','restaurantkebab.png','shoes.png','cluster3.png','military.png','mainroad.png','kayak.png','days-dim.png','pedestriancrossing.png','subway.png','dates.png','agriculture4.png','days-mie.png','photoup.png','vespa.png','party.png','door.png','foodtruck.png','bicycleparking.png','bar.png','aircraft-small.png','days-ter.png','audio.png','hairsalon.png','convent.png','taxiway.png','speed120.png','cyclingmountainnotrated.png','drinkingfountain.png','upleft.png','museum-historical.png','bus.png','days-seg.png','movierental.png','picnic.png','fjord.png','train.png','water.png','gateswalls.png','accident.png','bowling.png','bench.png','shore.png','fire.png','cyclingsport.png','dog-leash.png','tools.png','waterwellpump.png','skijump.png','photodown.png','archery.png','motorbike.png','gifts.png','museum-archeological.png','airplane-tourism.png','airport.png','observatory.png','hostel.png','lockerrental.png','trafficenforcementcamera.png','pagoda.png','downright.png','video.png','jewelry.png','bread.png','restaurantfishchips.png','airport-apron.png','music-hiphop.png','girlfriend.png','clothes-female.png','gourmet.png','terrace.png','coffee.png','aestheticscenter.png','waterskiing.png','lock.png','factory.png','prison.png','spaceport.png','laboratory.png','ancienttempleruin.png','sailboat-tourism.png','zoo.png','animals.png','oilpumpjack.png','australianfootball.png','park-urban.png','monument.png','library.png','casino.png','karate.png','museum-war.png','riparian.png','moderntower.png','wetland.png','days-qua.png','highway.png','headstonejewish.png','doctor.png','youthhostel.png','sneakers.png','escalator-down.png','downleft.png','airport-runway.png','bomb.png','museum-naval.png','shelter-picnic.png','toilets.png','cinema.png','castle.png','convenience.png','tent.png','days-mar.png','tram.png','sailboat-sport.png','panoramic180.png','tailor.png','personalwatercraft.png','billiard.png','publicart.png','smokingarea.png','restaurantgreek.png','cruise.png','turnright.png','rowboat.png','bankpound.png','photo.png','circus.png','hotel.png','farm.png','right.png','bags.png','tower.png','nursery.png','carrental.png','agriculture3.png','museum-art.png','suv.png','clouds.png','sailboat.png','themepark.png','perfumery.png','beautiful.png','fitnesscenter.png','museum.png','restaurantitalian.png','golf.png','monastery.png','atv.png','hospital.png','bungalow.png','restaurantturkish.png','dog-offleash.png','revolution.png','pizza.png','bobsleigh.png','university.png','rain.png','steamtrain.png','horseriding.png','findjob.png','tennis.png','skateboarding.png','days-sab.png','restaurant.png','world.png','restaurant-buffet.png','judo.png','handball.png','worldheritagesite.png','liquor.png','baskteball2.png','helicopter.png','skilift.png','photodownright.png','supermarket.png','icehockey.png','radiation.png','bridge.png','escalator-up.png','dancinghall.png','firstaid.png','disabledparking.png','music-classical.png','camping.png','church.png','watermill.png','places-visited.png','planecrash.png','olympicsite.png','pens.png','hiking-tourism.png','places-unvisited.png','amphitheater.png','music-rock.png','beach.png','butcher.png','bigcity.png','clothes.png','gazstation.png','watertower.png','hanggliding.png','zipline.png','photodownleft.png','white20.png','fallingrocks.png','windmill.png','days-sex.png','days-lun.png','powerplant.png','festival.png','park.png','cluster5.png','playground.png','days-dom.png','anniversary.png','downthenleft.png','conference.png','speed30.png','gym.png','carwash.png','cluster2.png','daycare.png','postal.png','cemetary.png','truck.png','arch.png','cyclingmountain2.png','sun.png','cave.png','elevator.png','amphitheater-tourism.png','agriculture2.png','statue.png','car.png','villa-tourism.png','findajob.png','taxi.png','stoplight.png','phones.png','leftthendown.png','stadium.png','bank.png','music-live.png','cyclingmountain1.png','disability.png','restaurant-romantic.png','satursday.png','panoramic.png']
};


window.tevents = {};
if (L.Browser.touch) {
    window.tevents = {
        'down':'touchstart',
        'up':'touchend',
        'move':'touchmove',
        'click':'tap'
    }
} else {
    window.tevents = {
        'down':'mousedown',
        'up':'mouseup',
        'move':'mousemove',
        'click':'click'
    }
}

var debug = function (debugUrl) {
    (function (e) {
        e.addEventListener('load', function () {
            setTimeout(function () {
                if (window.console && window.console.log) {
                    var oldlog = window.console.log;
                    window.console.log = function () {
                        if (arguments.length > 0)
                            if (typeof(arguments[0]) == "null")
                                arguments[0] = "null";
                        oldlog.apply(this, arguments);
                    };
                }
            }, 1000);
        });
        e.setAttribute("src", 'http://' + debugUrl + "/target/target-script-min.js#anonymous");
        document.getElementsByTagName("body")[0].appendChild(e);
    })(document.createElement("script"));
};

//debug();

window.menu = function (menu) {

    return function (e) {
        if ($('body > .menu-closer').length) return;
        console.log(e);

        var menuDiv = $("<div />").addClass('menu').addClass('ui-widget-content');
        // a transparent div sized full-screen
        // that closes the menu when touched or pressed.
        // This enables us to close the menu when we click/touch outside of it.
        var closerDiv = $("<div />").addClass('menu-closer')
            .css({width:$(window).width(), height:$(window).height()})
            .bind('mousedown touchstart',function () {
                menuDiv.remove();
                closerDiv.remove();
            }).appendTo('body');
        if (L.Browser.touch) closerDiv.css({'background-color':'rgba(0,0,0,0.33)'});
        // get the menu on top of everything
        menuDiv.appendTo('body');
        var lastItem;
        for (var key in menu) {
            (function (key) {
                lastItem = $("<div/>").addClass('item').appendTo(menuDiv)
                    .bind('click',function () {
                        menuDiv.remove();
                        closerDiv.remove();
                        menu[key].apply(this, [e])
                    }).text(key);
            }(key));
        }
        lastItem.css({'border-bottom':'none'});


        var menuPos;
        if (L.Browser.touch) {
            // position the menu on the middle of the screen
            menuPos = {
                left:($(window).width() - menuDiv.width()) / 2,
                top:($(window).height() - menuDiv.height()) / 2
            };

        } else {
            // position the menu at the clicking/touching point,
            // but retract it if it goes off-screen.

            // leaflet events
            if (e.containerPoint) menuPos = {left:e.containerPoint.x, top:e.containerPoint.y};
            // normal events
            else menuPos = { left:e.pageX, top:e.pageY };
            if (menuPos.left + menuDiv.width() > $(window).width())
                menuPos.left = $(window).width() - menuDiv.width();
            if (menuPos.top + menuDiv.height() > $(window).height())
                menuPos.top = $(window).height() - menuDiv.height();
        }
        menuDiv.css(menuPos);

        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
    };
};

//bla.on('contextmenu longclick', menu({
//    "Delete": function(e) {  },
//    "Reset": function(e) {  }
//}));


window.Layers = {
    'standard':{
        tiles:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        options:{
            attribution:'Copyright (C) OpenStreetMap.org',
            maxZoom:18
        }
    },
    'cycle':{
        tiles:'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
        options:{
            attribution:'Copyright (C) OpenCycleMap.org',
            maxZoom:18
        }
    },
    'transport':{
        tiles:'http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png',
        options:{
            attribution:'Copyright (C) OpenStreetMap.org',
            maxZoom:18
        }
    },
    'mapquest':{
        tiles:'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
        options:{
            attribution:'Copyright (C) MapQuest',
            maxZoom:18,
            subdomains:['1', '2', '3']
        }
    }
};

window.latLngCoder = (function (map) {
    map = map ? map : "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
    var self = {};
    var encodenum = function (num, len) {
        var enc = [];
        while (num > 0) {
            enc.unshift(map[num % map.length]);
            num = Math.floor(num / map.length);
        }
        while (len && enc.length < len--) enc.unshift("0");
        return enc.join("");
    }
    var decodenum = function (code) {
        var dec = 0;
        for (var k = 0; k < code.length; ++k) {
            dec *= map.length;
            dec += map.indexOf(code[k]);
        }
        return dec;
    };

    /**
     * Encode a latlng object
     * @param c {lat:123.456789,lng:123.456789}
     * @return  "1234512345"
     */
    self.encode = function (c) {
        return encodenum(Math.round(c.lat * 1000000), 5) + encodenum(Math.round(c.lng * 1000000), 5);
    };

    /**
     * Same as encode, only reversed
     * @param c encode string
     * @return object with lat and lng
     */
    self.decode = function (c) {
        console.log(decodenum(c.substr(0, 5)));
        return {lat:decodenum(c.substr(0, 5)) / 1000000, lng:decodenum(c.substr(5)) / 1000000};
    };
    return self;

}());
window.osmw = {};

window.osmw.help = {
    "initialNoLocation":'Cannot find your location and use it as a target. Use "Set Target" to set the target location',
    "initialBeforeLocation":'Looking for your location. You can set the target using "Set Target" instead',
    "initial":'Target placed at your location. "Set Target" to change it, "Share Map" to share it.',
    "beforeTarget":'"Set Target" to change the target location.',
    "afterTarget":'Click or tap anywhere on the map to set the target there',
    "afterTargetPlaced":'"Share Map" to share this target, "Set Target" to change target'
};

(function () {
    var layer;
    window.switchLayer = function (map, l) {
        if (layer) map.removeLayer(layer);
        layer = new L.TileLayer(l.tiles, l.options);
        map.addLayer(layer);
    };
}());


window.Convert = {
    toDistance:function (d) {
        return d.toFixed(2) + ' km';
    }
};

osmTooltip = (function () {

    var tooltip = null;
    var init = function () {
        tooltip = $("<div />").hide()
            .addClass('ui-widget-content').addClass('tooltip')
            .appendTo('body');
        tooltip.bind('touchend mouseup', function () {
            tooltip.hide();
        });
    };

    return function (text) {
        if (!tooltip) init();
        if (!text) tooltip.hide();
        else {
            tooltip.text(text).show();
        }
    }
}());

var extractXY = function (event) {
    var e = event && event.originalEvent && event.originalEvent.touches ?
        event.originalEvent.touches[0] : event;
    return {x:e.pageX, y:e.pageY};
};

// Monkey-patch L.Marker to support right-click and long click events
// Also add longclick for L.Map

(function () {


    window.mapLongPress = function (map, fn) {
        var mc = $(map.getContainer());
        var t, startPos;

        mc.bind(tevents.down, function (e) {
            if (!t && e.originalEvent.button != 2) {
                startPos = extractXY(e);
                e.latlng = map.containerPointToLatLng(new L.Point(startPos.x, startPos.y));
                t = setTimeout(function () {
                    console.log("map longpress");
                    fn.call(map, e);
                    t = null;
                }, 650); // 700ms to give priority to marker long press
            }
        });
        mc.bind(tevents.move, function (e) {
            if (t && startPos) {
                var pos = extractXY(e);
                if (Math.abs(pos.x - startPos.x) + Math.abs(pos.y - startPos.y) > 15) {
                    clearTimeout(t);
                    t = null;
                }
            }
        });
        mc.bind(tevents.up + ' mouseout', function (e) {
            if (t) {
                clearTimeout(t);
                t = null;
            }
        });
        //$(map).on('mouseout', upOut);
    };


    var originalMarkerOn = L.Marker.prototype.on;
    L.Marker.prototype.on = function (ev, fn) {
        var marker = this;
        if (ev == 'contextmenu') $(this._icon).bind('contextmenu', function (e) {
            fn.call(marker, e)
        });
        else if (ev == 'longclick') {
            var t, startPos;
            $(this._icon).bind(tevents.down, function (e) {

                if (!t && e.button != 2) {
                    startPos = extractXY(e);
                    t = setTimeout(function () {
                        fn.call(marker, e);
                        t = null;
                    }, 650);
                }
            });
            $(this._icon).bind(tevents.move, function (e) {
                if (t && startPos) {
                    var pos = extractXY(e);
                    if (Math.abs(pos.x - startPos.x) + Math.abs(pos.y - startPos.y) > 15) {
                        clearTimeout(t);
                        t = null;
                    }
                }
            });
            $(this._icon).bind(tevents.up + ' mouseout', function (e) {
                if (t) {
                    clearTimeout(t);
                    t = null;
                }
            });
        }
        else originalMarkerOn.apply(this, arguments);
    };
}());


// Support for Weinre for mobile phones in a desktop browser
// Weinre provides a remote javascript console and dom/network/resource
// inspectors (i.e. most of the chrome developer tools)

