const fetch = require( "node-fetch");
const FeedMessage =  require('gtfs-realtime-bindings');

const getData = async() => {
    try {
        const response = await fetch('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace');
        const buffer = await response.arrayBuffer();
        const feed = FeedMessage.transit_realtime.FeedMessage.decode(new Uint8Array(buffer));

        feed.entity.forEach((entity)=> {
            if(entity.tripUpdate){
                console.log(entity.tripUpdate)
            }
        });

    } catch (error){
        console.log('Error fetching GTFS-RT data: ',error);
    }

};

module.exports = {
    getData
};