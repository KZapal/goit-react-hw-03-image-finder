import axios from 'axios';

const API_KEY = '41236626-85b007b23c35ddfe2334f7f05';

const fetchImages = (searchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits)
    .catch(error => console.log(error));
};

export default fetchImages;
