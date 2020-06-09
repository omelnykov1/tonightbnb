export const fetchSpots = () => {
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

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
);

export const fetchSearchResult = (keyword) => (
    $.ajax({
        method: "GET",
        url: "api/search",
        data: { keyword }
    })
)

