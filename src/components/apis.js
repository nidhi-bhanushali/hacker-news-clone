import axios from 'axios';

export const mainUrl = 'https://hacker-news.firebaseio.com/v0/'

export const newStories = `${mainUrl}newstories.json`;

export const topStories = `${mainUrl}topstories.json`;

export const getNewStoriesIds = async () => {
    const result = await axios.get(newStories).then(data => data)

    return result;
}

export const getNewArticles = async storyId => {
    const result = await axios.get(`${mainUrl}item/${storyId}.json`)
    .then(({ data }) => data);

    return result;
}

export const getTopArticles = async storyId => {
    const result = await axios.get(`${mainUrl}item/${storyId}.json`)
    .then(({ data }) => data);

    return result;
}

export const getTopStoriesIds = async () => {
    const result = await axios.get(topStories).then(data => data)

    return result;
}