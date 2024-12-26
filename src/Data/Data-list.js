const data = [
    {
      location: 'Washington, D.C.',
      latitude: 38.9072,
      longitude: -77.0369
    },
    {
      location: 'Paris',
      latitude: 48.8566,
      longitude: 2.3522
    },
    {
      location: 'Tokyo',
      latitude: 35.6895,
      longitude: 139.6917
    },
    {
      location: 'Brasilia',
      latitude: -15.8267,
      longitude: -47.9218
    },
    {
      location: 'Canberra',
      latitude: -35.2809,
      longitude: 149.1300
    },
    {
      location: 'Ottawa',
      latitude: 45.4215,
      longitude: -75.6972
    },
    {
      location: 'New Delhi',
      latitude: 28.6139,
      longitude: 77.2090
    },
    {
      location: 'Pretoria',
      latitude: -25.7479,
      longitude: 28.2293
    },
    {
      location: 'Moscow',
      latitude: 55.7558,
      longitude: 37.6173
    },
    {
      location: 'Dhaka',
      latitude: 23.8103,
      longitude: 90.4125
    },
    {
      location: 'London',
      latitude: 51.5074,
      longitude: -0.1278
    },
    {
      location: 'Berlin',
      latitude: 52.5200,
      longitude:13.404954
    },
    {
      location: 'Madrid',
      latitude: 40.4168,
      longitude: -3.7038
    },
    {
      location: 'Rome',
      latitude: 41.9028,
      longitude: 12.4964
    },
    {
      location: 'Beijing',
      latitude: 39.9042,
      longitude: 116.4074
    }
  ];

  function getLocation(){
    return data
  }

  function getLocationByName (location){
    if(!location) return null

    const filtered = data.filter(item => item.location=== location)

    if (filtered.length > 0 ){
        return filtered[0]
    } else{
        const  defaultLocation ={
            location : "",
            latitude: 0,
            longitude: 0
        }
        return defaultLocation
    }
  }

  export {getLocation, getLocationByName}