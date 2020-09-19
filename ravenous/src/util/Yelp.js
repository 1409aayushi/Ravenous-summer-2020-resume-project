const { default: SearchBar } = require("../components/SearchBar/SearchBar");

const apikey = 'KuzQo55jOAnw4PE0fb52vvQHtxmz3lmfBna6JbRAGCerePSR74Sybl5cDP_viP6-MuYCf498F0eWnzv_TZsv1Hda8J7yIQT09eWUQ-aK9owJctbTd3EU10oJ-l5iX3Yx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apikey}`
            }
        }).then(response => {
              return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code ,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        });
      }
};
export default Yelp;