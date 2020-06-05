export const fetchSpots = () => {
    debugger
    return $.ajax({
        url: '/api/spots'
    })
}

export const fetchSpot = spotId => (
    $.ajax({
        url: `/api/spots/${spotId}`
    })
)

export const updateSpot = spot => (
    $.ajax({
        method: 'patch',
        url: `/api/spots/${spot.id}`,
        data: {spot}
    })
)

export const createSpot = spot => (
    $.ajax({
        method: 'post',
        url: '/api/spots',
        data: {spot}
    })
)

